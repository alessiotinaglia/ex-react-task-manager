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

    const addTask = async (newTask) => {
        try {
            const response = await fetch('http://localhost:3001/tasks', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTask)
            });

            const { success, message, task } = await response.json();

            if (!success) {
                throw new Error(message);
            }

            setTasks(prev => [...prev, task]);
        } catch (error) {
            console.error("Errore nell'aggiunta della task:", error.message);
            throw error;
        }
    };

    const removeTask = async taskId => {
        const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
            method: `DELETE`
        });

        const { success, message } = await response.json();
        if (!success) {
            throw new Error(message);
        }
        setTasks(prev => prev.filter(t => t.id !== taskId))
    }


    
    function updateTask() { }

    return { tasks, addTask, removeTask, updateTask };
}

export default useTasks;
