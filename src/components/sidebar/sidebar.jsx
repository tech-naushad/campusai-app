import styles from './sidebar.module.css'
import { modules } from '../../data/modules'
import { moduleIconMap } from '../../Icons'

export default function Sidebar({ activeId, onSelect }) {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarTitle}>Select a module</div>
        <div className={styles.sidebarSubtitle}>Choose a topic to start your conversation</div>
      </div>
      <div className={styles.modulesList}>
        {modules.map((mod) => {
          const IconComponent = moduleIconMap[mod.id]
          const isActive = activeId === mod.id
          return (
            <button
              key={mod.id}
              className={`${styles.moduleBtn} ${isActive ? styles.active : ''}`}
              onClick={() => onSelect(mod)}
            >
              <div className={styles.moduleIcon}>
                {IconComponent && <IconComponent />}
              </div>
              <div className={styles.moduleText}>
                <div className={styles.moduleName}>{mod.name}</div>
                <div className={styles.moduleDesc}>{mod.desc}</div>
              </div>
              <span className={styles.activeIndicator} />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
