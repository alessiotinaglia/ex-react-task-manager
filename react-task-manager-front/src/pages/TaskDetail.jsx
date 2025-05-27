import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import Modal from "../Component/Modal";
import '../App.css';

function TaskDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tasks, removeTask } = useContext(GlobalContext);
    const [showDelete, setShowDelete] = useState(false);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return <h3>Task non trovata</h3>;
    }

    const handleDelete = async () => {
        try {
            await removeTask(task.id);
            alert("Task eliminata");
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Errore durante l'eliminazione del task");
        }
    };

    return (
        <div className="task-detail-container">
            <h1>Dettaglio task</h1>
            <p><strong>Nome :</strong> {task.title}</p>
            <p><strong>Descrizione :</strong> {task.description}</p>
            <p><strong>Stato :</strong> {task.status}</p>
            <p><strong>Data di creazione :</strong> {new Date(task.createdAt).toLocaleDateString()}</p>

            <button onClick={() => setShowDelete(true)}>Elimina task</button>

            <Modal
                title="Conferma eliminazione"
                content={<p>Sei sicuro di voler eliminare <strong>{task.title}</strong>?</p>}
                show={showDelete}
                onClose={() => setShowDelete(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />
        </div>
    );
}

export default TaskDetails;
