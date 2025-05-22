import { memo } from 'react';

const TaskRow = ({ task }) => {
    const statusClassName = task.status.split(' ').join('').toLowerCase();

    return (
        <tr>
            <td>{task.title}</td>
            <td className={statusClassName}>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
};

// wrappato il componente qui 
export default memo(TaskRow);
