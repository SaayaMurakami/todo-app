import React, { useState } from 'react';
import { ITask } from './TaskModel';
import { Checkbox, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    checkedTask: {
      textDecoration: 'line-through'
    },
    uncheckedTask: {
    }
  }));

interface TaskProps {
    task: ITask,
}

const Task: React.FC<TaskProps> = (props) => {
    const classes = useStyles();

    const clickCheckButton = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCompleted(event.target.checked);
    };

    const clickDeleteButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      setDeleted(true);
    };

    const [name, setName] = React.useState(props.task.title);
    const [completed, setCompleted] = React.useState(props.task.completed);
    const [deleted, setDeleted] = React.useState(props.task.deleted);

    return (
      <div>
        <div className={completed ? classes.checkedTask : classes.uncheckedTask} style={{display: 'inline'}}>
            <Checkbox
            checked={completed}
            onChange={clickCheckButton}
            value="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {name}
        </div>
        <Button variant="contained" onClick={clickDeleteButton}>削除</Button>
      </div>
    )
}



export default Task;