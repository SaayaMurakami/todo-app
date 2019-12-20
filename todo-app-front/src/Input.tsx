import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { ITask } from './TaskModel';

interface InputProps {
    addTask: (newTask: ITask) => void
}

const Input: React.FC<InputProps> = (props) => {

    const [inputTask, setInputTask] = React.useState('');

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTask(event.target.value);
    };

    const clickCreateButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const newTask: ITask = {
            title: inputTask,
            completed: false,
            deleted: false,
            estimateDate: null
            };
        props.addTask(newTask)
    };

    return ( 
        <div>
            <p><TextField id="standard-basic" label="Standard" onChange={changeInput}/>
            <Button variant="contained" onClick={clickCreateButton}>追加</Button></p>
        </div>
    )
}

export default Input;
