import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import TaskRow from "../Component/TaskRow";
import '../App.css';

function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('tasks:', tasks);

    return (
        <div>
            <h1>Lista task</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Data creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => {
                        return <TaskRow key={task.id} task={task} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;