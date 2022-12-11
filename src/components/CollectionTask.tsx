import { Check, Trash } from 'phosphor-react'
import styles from './CollectionTask.module.css'

export function CollectionTask() {
  return(
    <div className={styles.card} >
      <button type='button' >
        <Check/>
      </button>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <Trash size={24} />
    </div>
  )
}
