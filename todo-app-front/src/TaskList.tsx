import React from 'react';
import { ITask } from './TaskModel';
import Task from './Task';

interface TaskListProps {
    updateTask: (currentTask: ITask, updateTask: ITask) => void
    deleteTask: (targetTask: ITask) => void
    taskList:Array<ITask>
}

const TaskList: React.FC<TaskListProps> = (props) => {
    return (
        <div>
        {props.taskList.map(task => {
            return <Task task={task} updateTask={props.updateTask} deleteTask={props.deleteTask}/>
        })}
        </div>
    );
}

export default TaskList;
