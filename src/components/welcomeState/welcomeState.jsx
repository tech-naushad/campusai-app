import styles from './welcomeState.module.css'
import { Icons } from '../../Icons'

export default function WelcomeState() {
  return (
    <div className={styles.welcome}>
      <div className={styles.icon}>
        <Icons.Chat />
      </div>
      <h2 className={styles.title}>How can we help you?</h2>
      <p className={styles.sub}>
        Select a module from the left panel to get started. Our assistant is here to answer all your university-related questions.
      </p>
      <div className={styles.arrow}>
        <Icons.Arrow />
        Choose a module to begin
      </div>
    </div>
  )
}
