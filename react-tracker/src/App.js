import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        day: 'date',
        reminder: true,

    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'date',
        reminder: true,

    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'date',
        reminder: false,

    },
])

// delete task 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id != id))
} 
// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
     task.id === id ? {...task, reminder:
      !task.reminder } : task
      )
    )
}


  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? ( 
      <Tasks tasks = {tasks} onDelete= {deleteTask} onToggle={toggleReminder}
      />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
