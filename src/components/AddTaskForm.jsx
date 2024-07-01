//Este componente proporciona un formulario para agregar nuevas tareas a la lista.
import { useState } from 'react';
import '../assets/css/Task.css';


function AddTaskForm({addTask}) {
    const [task, setTask] = useState();

    const checkAndAddNewTask = () =>{
  
        if (task !== undefined && task.trim() != '' && task.length < 150) {
            addTask(task);
        }
        else {
            alert('El nombre de la tarea no puede estar vacío ni ser mayor de 150 caracteres. Prueba de nuevo!')
        }
        setTask('');
    }

    return (
      <>
       <div className="tasks">
        <input type='text'  value={task} onChange={(e) => setTask(e.target.value)}/>
        <p><button onClick={checkAndAddNewTask}>Añadir</button></p>
        </div>
      </>
    )
  }
  
  export default AddTaskForm;