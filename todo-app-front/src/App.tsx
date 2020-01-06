import React, { useState } from 'react';
import './App.css';
import { ITask } from './TaskModel';
import Input from './Input';
import TaskList from './TaskList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#CCCCFF',
    textAlign: 'center'
  }
}));

const tasks:Array<ITask> = [
  {
    title: '牛乳を買う',
    completed: false,
    deleted: false
  },
  {
    title: '洗濯する',
    completed: false,
    deleted: false
  },
  {
    title: '掃除する',
    completed: false,
    deleted: false
  }
];

const App: React.FC = (props) => {
  const classes = useStyles();
  
  const [taskList, setTaskList] = React.useState(tasks);
  console.log(taskList);

  const addTask = (inputTask: ITask) => {
    setTaskList(taskList.concat([inputTask]));
  };


  const updateTask = (currentTask: ITask, updateTask: ITask) => {
    const taskListCopy = taskList.slice();
    const index = taskList.indexOf(currentTask);
    taskListCopy[index] = updateTask;
    setTaskList(taskListCopy);
  };

  const deleteTask = (targetTask: ITask) => {
    const taskListCopy = taskList.slice();
    const index = taskList.indexOf(targetTask);
    taskListCopy.splice( index, 1 );
    setTaskList(taskListCopy);
  };

  return (
    <div className={classes.root}>
      <p>TODOアプリ</p>
      <p>タスクを追加してください</p>
      <Input addTask={addTask}/>
      <TaskList taskList={taskList} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
