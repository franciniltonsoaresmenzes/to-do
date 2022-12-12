import { v4 as uuidv4 } from 'uuid'

export interface taskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export const tasks:taskProps[] = [
  {
    id: uuidv4(),
    title: 'Estudar javascript',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Estudar javas',
    isComplete: true
  },
  {
    id: uuidv4(),
    title: 'Estudar reactjs',
    isComplete: true
  }
]
