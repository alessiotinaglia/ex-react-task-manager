import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import '../App.css';

function TaskDetails() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <h3>Task non trovata</h3>
        )
    }

    const handleDelete = () => {
        console.log("Task eliminata:", task.id);
    }

    return (
        <div className="task-detail-container">
            <h1>Dettaglio task</h1>
            <p><strong>Nome :</strong> {task.title}</p>
            <p><strong>Descrizione :</strong> {task.description}</p>
            <p><strong>Stato :</strong> {task.status}</p>
            <p><strong>Data di creazione :</strong> {new Date(task.createdAt).toLocaleDateString()}</p>
            <button onClick={handleDelete}>Elimina task</button>
        </div>
    )
}

export default TaskDetails;