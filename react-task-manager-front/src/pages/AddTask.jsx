import { useState, useRef, useMemo, useContext } from "react";
import { GlobalContext } from '../GlobalContext';

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\.<>?/`~";

function Addtask() {
    const { addTask } = useContext(GlobalContext);

    const [taskTitle, setTaskTitle] = useState("");
    const descriptionRef = useRef();
    const statusRef = useRef();

    const errorTitle = useMemo(() => {
        if (!taskTitle.trim()) return "il nome non può essere vuoto";
        if ([...taskTitle].some(char => symbols.includes(char)))
            return "non può contenere simboli";
        return "";
    }, [taskTitle]);

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("status selezionato:", statusRef.current.value);

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        };

        try {
            await addTask(newTask);
            alert("Creato con successo");

            setTaskTitle("");
            descriptionRef.current.value = "";
            statusRef.current.value = "To Do"; 
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Aggiungi task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>
                {errorTitle && (
                    <p style={{ color: 'red' }}>{errorTitle}</p>
                )}

                <label>
                    Descrizione
                    <textarea ref={descriptionRef} />
                </label>

                <label>
                    Stato
                    <select ref={statusRef} defaultValue="To Do">
                        <option value="To Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </label>

                <button type="submit">Aggiungi Task</button>
            </form>
        </div>
    );
}

export default Addtask;
