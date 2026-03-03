import React from 'react';
import './MyTasks.css';

const MyTasks = ({ tasks }) => {
    return (
        <div className="my-tasks">
            <h2 className="section-title">My Tasks</h2>
            <div className="tasks-grid">
                {tasks.map(task => (
                    <div key={task._id} className="task-card">
                        <h3>{task.title}</h3>
                        <p className="task-description">{task.description}</p>
                        <div className="task-footer">
                            <span className="task-deadline">Deadline: {new Date(task.deadline).toLocaleDateString()}</span>
                            <span className={`task-status status-${task.status}`}>
                                {task.status.toUpperCase()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTasks;
