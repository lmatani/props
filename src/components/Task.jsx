//Este componente muestra una tarea individual y maneja los eventos de clic en la tarea.
import '../assets/css/Task.css'

function Task({ id, text, completed, deleteTask }) {

    return (
      <>
        <li className="tasks task">
        <p className={(completed) ? "taskRemove" : "taskAdd" }>{text}</p>
        <button onClick={() => deleteTask(id)}>Eliminar</button>
        </li>
      </>
    );
};
  

export default Task;
  