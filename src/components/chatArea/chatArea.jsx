import { useState, useEffect, useRef } from 'react'
import styles from './chatArea.module.css'
import { Message, TypingIndicator } from '../message/Message'
import WelcomeState from '../welcomeState/WelcomeState'
import { Icons } from '../../Icons'
import { getBotResponse } from '../../data/modules'

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default function ChatArea({ activeModule }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  // When module changes, reset chat and send greeting
  useEffect(() => {
    if (!activeModule) return
    setMessages([
      { role: 'bot', text: activeModule.greeting, time: getTime() }
    ])
    setInput('')
    setTimeout(() => textareaRef.current?.focus(), 50)
  }, [activeModule])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (text) => {
    const trimmed = (text ?? input).trim()
    if (!trimmed || !activeModule || isTyping) return

    setMessages(prev => [...prev, { role: 'user', text: escapeHtml(trimmed), time: getTime() }])
    setInput('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setIsTyping(true)

    const delay = 700 + Math.random() * 600
    setTimeout(() => {
      const response = getBotResponse(activeModule, trimmed)
      setMessages(prev => [...prev, { role: 'bot', text: response, time: getTime() }])
      setIsTyping(false)
    }, delay)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInputChange = (e) => {
    setInput(e.target.value)
    // auto-resize textarea
    const el = e.target
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 120) + 'px'
  }

  const hasModule = !!activeModule
  const showWelcome = !hasModule
  const showSuggestions = hasModule && messages.length <= 1 && !isTyping

  return (
    <div className={styles.chatArea}>

      {/* Active module banner */}
      {hasModule && (
        <div className={styles.moduleBanner}>
          <Icons.Info />
          <span>Module: <strong>{activeModule.name}</strong></span>
        </div>
      )}

      {/* Welcome or messages */}
      {showWelcome ? (
        <WelcomeState />
      ) : (
        <div className={styles.messagesArea}>
          {messages.map((msg, i) => (
            <Message key={i} role={msg.role} text={msg.text} time={msg.time} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Suggestion chips */}
      {showSuggestions && (
        <div className={styles.suggestions}>
          {activeModule.suggestions.map((s) => (
            <button
              key={s}
              className={styles.chip}
              onClick={() => sendMessage(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input bar */}
      <div className={`${styles.inputBar} ${!hasModule ? styles.inputDisabled : ''}`}>
        <div className={styles.inputWrapper}>
          <textarea
            ref={textareaRef}
            className={styles.textarea}
            rows={1}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={hasModule ? `Ask about ${activeModule.name.toLowerCase()}…` : 'Select a module first to start chatting…'}
            disabled={!hasModule || isTyping}
          />
          <button
            className={styles.sendBtn}
            onClick={() => sendMessage()}
            disabled={!hasModule || !input.trim() || isTyping}
            aria-label="Send message"
          >
            <Icons.Send />
          </button>
        </div>
        <div className={styles.inputFooter}>
          <span className={styles.inputNote}>
            {hasModule ? 'Press Enter to send · Shift+Enter for new line' : 'Please select a module to begin.'}
          </span>
          {input.length > 0 && (
            <span className={styles.charCount}>{input.length}/500</span>
          )}
        </div>
      </div>

    </div>
  )
}
