import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { AddNewTask } from './components/AddNewTask'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.content} >
        <AddNewTask/>
      </main>
    </>
  )
}

export default App
