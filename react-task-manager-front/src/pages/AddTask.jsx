import { useState, useRef, useMemo } from "react";

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\.<>?/`~";

function Addtask() {
    const [taskTitle, setTaskTitle] = useState("")
    const descriptionRef = useRef();
    const statusRef = useRef();

    const errorTitle = useMemo(() => {
        if (!taskTitle.trim()) return "il nome non puo essere vuoto"
        if ([...taskTitle].some(char => symbols.includes(char)))
            return "non puo contenere simboli"
        return ""
    }, [taskTitle])

    const handleSubmit = event => {
        event.preventDefault()
        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }
        console.log("task aggiunta", newTask);
    }

    return (
        <div>
            <h1>Aggiungi task</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome
                    <input type="text"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)}
                    />
                </label>
                {errorTitle &&
                    <p style={{ color: 'red' }}>{errorTitle}</p>}


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
    )
}

export default Addtask;