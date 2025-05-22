import { useEffect, useState } from 'react';

function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:3001/tasks';
        console.log('API URL:', url);

        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Errore nel fetch:', error));
    }, []);

    function addTask(){}

    function removeTask(){}

    function updateTask(){}

    return { tasks, addTask, removeTask, updateTask };
}

export default useTasks;
