import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { Task } from './components/Task/Task'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.content} >
        <Task />
      </main>
    </>
  )
}

export default App
