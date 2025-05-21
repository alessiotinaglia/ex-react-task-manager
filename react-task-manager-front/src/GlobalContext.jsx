import { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const url = `http://localhost:3001/tasks`;
        console.log("API URL:", url);

        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))          
            .catch(error => console.error("Errore nel fetch:", error));
    }, []);

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    );
}
