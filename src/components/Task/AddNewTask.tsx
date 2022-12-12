import { PlusCircle } from 'phosphor-react'
import styles from './AddNewTask.module.css'

export function AddNewTask() {
  return (
    <form className={styles.formTask} >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button type='button'>
        Criar
        <PlusCircle size={16} weight='bold'/>
      </button>
    </form>
  )
}
