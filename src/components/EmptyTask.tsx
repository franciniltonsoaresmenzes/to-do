import styles from './EmptyTask.module.css'

import clipBoard from '../assets/Clipboard.svg'

export function EmptyTask() {
  return(
    <div className={styles.emptyTask} >
      <img src={clipBoard} alt=""/>
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
