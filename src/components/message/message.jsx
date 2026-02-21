import styles from './message.module.css'
import { Icons } from '../../Icons'

export function Message({ role, text, time }) {
  return (
    <div className={`${styles.message} ${role === 'user' ? styles.user : styles.bot}`}>
      <div className={`${styles.avatar} ${role === 'user' ? styles.avatarUser : styles.avatarBot}`}>
        {role === 'bot' ? <Icons.Bot /> : <Icons.User />}
      </div>
      <div className={styles.bubbleWrap}>
        <div
          className={`${styles.bubble} ${role === 'user' ? styles.bubbleUser : styles.bubbleBot}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  )
}

export function TypingIndicator() {
  return (
    <div className={styles.message}>
      <div className={`${styles.avatar} ${styles.avatarBot}`}>
        <Icons.Bot />
      </div>
      <div className={styles.typingDots}>
        <span style={{ animationDelay: '0s' }} />
        <span style={{ animationDelay: '0.2s' }} />
        <span style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  )
}
