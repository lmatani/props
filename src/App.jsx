import React from 'react';
import { useState } from 'react'
import Task from './components/Task';
import './App.css'
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (taskName) => {

    console.log('task:' + taskName);
    const myList = [...tasks];
    const numTask = (myList !== undefined) ? myList.length + 1 : 1;

    const newTask = {
      id: numTask,
      text: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
   
  };
  
  const deleteTask = (taskId) => {
    const myList = tasks.map(task => task.id === taskId ? { ...task, completed: true } : task);
    //console.log(myList);
    setTasks(myList);
    };
  
  return (
    <>
     <h1>Lista de Tareas</h1>
      <AddTaskForm addTask ={addTask} />
      <ul>
        {tasks.map(task => (
          <Task
            key={task.id} {...task} deleteTask = {deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
