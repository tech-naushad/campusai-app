import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import ChatArea from './components/chatArea/ChatArea'

export default function App() {
  const [activeModule, setActiveModule] = useState(null)

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Sidebar activeId={activeModule?.id} onSelect={setActiveModule} />
        <ChatArea activeModule={activeModule} />
      </div>
    </div>
  )
}
