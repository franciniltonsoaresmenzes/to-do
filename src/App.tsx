import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header/Header'
import { AddNewTask } from './components/Task/AddNewTask'
import { Task } from './components/Task/Task'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.content} >
        <AddNewTask/>
        <Task />
      </main>
    </>
  )
}

export default App
