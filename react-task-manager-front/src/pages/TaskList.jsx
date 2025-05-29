import { useCallback, useContext, useMemo, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import TaskRow from "../Component/TaskRow";
import '../App.css';

function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}

function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('tasks:', tasks);

    const [searchQuery, setSearchQuery] = useState("");
    const debounceSearch = useCallback(debounce(setSearchQuery, 500), []);

    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSorOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    const handlerSort = (field) => {
        if (sortBy === field) {
            setSorOrder(prev => prev * -1)
        } else {
            setSortBy(field);
            setSorOrder(1);
        }
    }

    const filteredAndSortedTasks = useMemo(() => {
        return [...tasks]
            .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                let comparison;

                if (sortBy === "title") {
                    comparison = a.title.localeCompare(b.title);
                } else if (sortBy === "status") {
                    const statusOptions = ["To Do", "Doing", "Done"];
                    const indexA = statusOptions.indexOf(a.status);
                    const indexB = statusOptions.indexOf(b.status);
                    comparison = indexA - indexB;
                } else if (sortBy === "createdAt") {
                    const dateA = new Date(a.createAt).getTime();
                    const dateB = new Date(b.createAt).getTime();
                    comparison = dateA - dateB;
                }
                return comparison * sortOrder;
            })


    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <div>
            <h1>Lista task</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Cerca una task"
                    onChange={e => debounceSearch(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handlerSort('title')}>Nome {sortBy === "title" && sortIcon}</th>
                        <th onClick={() => handlerSort('status')}>Status {sortBy === "status" && sortIcon}</th>
                        <th onClick={() => handlerSort('createdAt')}>Data creazione {sortBy === "createdAt" && sortIcon}</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAndSortedTasks.map(task => {
                        return <TaskRow key={task.id} task={task} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;