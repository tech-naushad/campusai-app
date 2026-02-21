import styles from './header.module.css'
import { Icons } from '../../Icons'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logoMark}>
          <Icons.Academic />
        </div>
        <div>
          <div className={styles.brandName}>UniAssist</div>
          <div className={styles.brandTag}>University Help Center</div>
        </div>
      </div>
      <div className={styles.statusPill}>
        <span className={styles.statusDot} />
        Online · Ready to help
      </div>
    </header>
  )
}
