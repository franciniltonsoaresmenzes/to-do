import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import { taskProps } from '../../API/Task';
import styles from './CollectionTask.module.css'

interface CollectionTaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: string) => void
  onCheckedTask: (id: string) => void
}

export function CollectionTask({ id, title, isComplete, onDeleteTask, onCheckedTask }: CollectionTaskProps) {
  const [icon, setIcon] = useState(isComplete)

  function handleCheck() {
    if (icon === true) {
      onCheckedTask(id)
      setIcon(!icon)
      return null
    }
    onCheckedTask(id)
    setIcon(!icon)
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return(
    <div className={styles.card} >
      <button 
        type='button'
        className={icon ? styles.true : styles.false}
        onClick={handleCheck}
      >
        { icon ? <Check weight='bold' />  : null}
      </button>
      <p className={icon ? styles.checked : styles.noChecked} >{title}</p>
      <Trash 
        size={12}
        className={styles.trash}
        onClick={handleDeleteTask}
      />
    </div>
  )
}
