import { EmptyTask } from './EmptyTask'
import styles from './Task.module.css'

export function Task() {
  return (
    <section>
      <header className={styles.navTask} >
        <div className={styles.indice} >
          <span className={styles.indexTask} >Tarefas criadas</span>
          <span className={styles.index} >0</span>
        </div>

        <div className={styles.indice} >
          <span className={styles.indexTask} >Concluídas</span>
          <span className={styles.index} >0</span>
        </div>
      </header>

      <EmptyTask />
    </section>
  )
}
