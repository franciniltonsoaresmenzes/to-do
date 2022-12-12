import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './CollectionTask.module.css'

export function CollectionTask() {
  const [icon, setIcon] = useState(false)

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
      <p className={icon ? styles.checked : styles.noChecked} >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash 
        size={12}
        className={styles.trash}
      />
    </div>
  )
}
