import styles from './Header.module.css'
import logoRocket from '../../assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.nav} >
      <div className={styles.logo} >
        <img src={logoRocket} alt="Logo" />
        <h1>to<span>do</span></h1>
      </div>
    </header>
  )
}
