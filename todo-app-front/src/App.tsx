import React, { useState } from 'react';
import './App.css';
import { ITask } from './TaskModel';
import Input from './Input';
import TaskList from './TaskList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#CCCCFF'
  },
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

  return (
    <div className={classes.root}>
      <p>TODOアプリ</p>
      <p>タスクを追加してください</p>
      <Input addTask={addTask}/>
      <TaskList taskList={taskList}/>
    </div>
  );
}

export default App;
