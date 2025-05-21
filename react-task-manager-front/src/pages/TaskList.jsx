import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";


function TaskList() {

    const {tasks} = useContext(GlobalContext);
    console.log('tasks:', tasks);
    
    return (
        <div>
            <h1>lista task</h1>
        </div>
    )
}

export default TaskList;