import { memo } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const TaskRow = ({ task }) => {
    const statusClassName = task.status.split(' ').join('').toLowerCase();

    return (
        <tr>
            <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
            <td className={statusClassName}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
};

// wrappato il componente qui 
export default memo(TaskRow);
