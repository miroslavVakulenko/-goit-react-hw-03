import { useState } from 'react';
import './App.css';
import initialTasks from './Tasks.json';
import Filter from './components/Collection/Filter/Filter';
import Form from './components/Collection/Form/Form';
import TaskList from './components/Collection/TaskList/TaskList';
import UserForm from './components/UserForm/UserForm';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = newTasks => {
    console.log(newTasks);
    // console.log('onAdd work');
    //prevTasks це значення стану tasks на момент оновлення
    setTasks(prevTasks => {
      return [...prevTasks, newTasks];
    });
  };

  const deleteTask = taskId => {
    console.log(taskId);
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId);
    });
  };
  const visibleTasks = tasks.filter(task =>
    task.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      <div>
        <UserForm />
        <Form onAdd={addTask} />
        <Filter value={filter} onFilter={setFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </div>
    </>
  );
}

export default App;
