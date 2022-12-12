import styles from './Task.module.css'

import { taskProps, tasks } from '../../API/Task'

import { v4 as uuidv4 } from 'uuid'

import { CollectionTask } from './CollectionTask'
import { EmptyTask } from './EmptyTask'

import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

export function Task() {
  const [newTaskTex, setNewTaskTex] = useState<string>('')

  const [ task, setTask ] = useState<taskProps[]>([...tasks])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
  
    const todo:taskProps = {
      id: uuidv4(),
      title: newTaskTex,
      isComplete: false
    }
    setTask([...task, todo])
    setNewTaskTex('')
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>){
    setNewTaskTex(event.target.value)
  }

  function deleteTask(id: string) {
    const taskWithoutDeleteOne = task.filter(task => task.id !== id)
    setTask(taskWithoutDeleteOne)
  }

  const isTask = task.length

  const isCheckedTask = task.reduce((acumulador, x) => x.isComplete ? ++acumulador : acumulador, 0)

  return (
    <>
      <form className={styles.formTask} onSubmit={handleCreateNewTask} >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskTex}
          onChange={handleNewTask}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} weight='bold'/>
        </button>
      </form>

      <section>
        <header className={styles.navTask} >
          <div className={styles.indice} >
            <span className={styles.indexTask} >Tarefas criadas</span>
            <span className={styles.index} >{task.length}</span>
          </div>

          <div className={styles.indice} >
            <span className={styles.indexTask} >Concluídas</span>
            <span className={styles.index} >{isCheckedTask} de { task.length }</span>
          </div>
        </header>

          {isTask > 0 ?
            task.map(task => (
              <CollectionTask
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
                onDeleteTask={deleteTask}
              />
          ))
          : <EmptyTask />}
       </section>
    </>
  )
}
