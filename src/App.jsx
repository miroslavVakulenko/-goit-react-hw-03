import { useState } from 'react';
import './App.css';
import initialTasks from './Tasks.json';
import Filter from './components/Collection/Filter/Filter';
import Form from './components/Collection/Form/Form';
import TaskList from './components/Collection/TaskList/TaskList';
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = newTasks => {
    console.log(newTasks);
    // console.log('onAdd work');
    //prevTasks це значення стану tasks на момент оновлення
    setTasks(prevTasks => {
      return [...prevTasks, newTasks];
    });
  };
  return (
    <>
      <div>
        <Form onAdd={addTask} />
        <Filter />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
