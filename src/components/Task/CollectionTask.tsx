import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import { taskProps } from '../../API/Task'
import styles from './CollectionTask.module.css'

export function CollectionTask({ title, isComplete }: taskProps) {
  const [icon, setIcon] = useState(isComplete)

  function handleCheck() {
    setIcon(!icon)
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
      />
    </div>
  )
}
