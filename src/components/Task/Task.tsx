import styles from './Task.module.css'

import { tasks } from '../../API/Task'

import { CollectionTask } from './CollectionTask'
import { EmptyTask } from './EmptyTask'

import { PlusCircle } from 'phosphor-react'

export function Task() {
  const isTask = true

  return (
    <>
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

          {isTask ?
            tasks.map(task => (
              <CollectionTask
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
          ))
          : <EmptyTask />}
       </section>
    </>
  )
}
