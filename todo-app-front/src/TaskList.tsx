import React, { useState } from 'react';
import { ITask } from './TaskModel';
import Task from './Task';

interface TaskListProps {
    taskList:Array<ITask>
}

const TaskList: React.FC<TaskListProps> = (props) => {
    return (
        <div>
        {props.taskList.map(task => {
                return <Task task={task}/>
        })}
        </div>
    );
}

export default TaskList;
