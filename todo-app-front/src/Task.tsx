import React from 'react';
import { ITask } from './TaskModel';
import { Checkbox, makeStyles, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
    checkedTask: {
      textDecoration: 'line-through'
    },
    uncheckedTask: {
    }
  }));

interface TaskProps {
  task: ITask,
  updateTask: (currentTask: ITask, updateTask: ITask) => void
  deleteTask: (targetTask: ITask) => void
}

const Task: React.FC<TaskProps> = (props) => {
    const classes = useStyles();

    const clickCheckButton = (event: React.ChangeEvent<HTMLInputElement>) => {
      const updateTask: ITask = {
        title: props.task.title,
        completed: event.target.checked,
        deleted: props.task.deleted,
        estimateDate: null
      };
      props.updateTask(props.task, updateTask);
    };

    const clickDeleteButton = (event: React.MouseEvent<HTMLButtonElement>) => {

      props.deleteTask(props.task);
    };
   
    return (
      <div>
        <div className={props.task.completed ? classes.checkedTask : classes.uncheckedTask} style={{display: 'inline'}}>
            <Checkbox
            checked={props.task.completed}
            onChange={clickCheckButton}
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {props.task.title}
        </div>
        <Tooltip title="Delete">
        <IconButton aria-label="delete" onClick={clickDeleteButton}>
          <DeleteIcon />
        </IconButton>
        </Tooltip>
      </div>
    )
}



export default Task;