import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#CCCCFF'
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Fab color="primary" aria-label="add">
        <AddIcon />
        </Fab>
        <Person name={"のぐりん"} age={28} height={167}/>
        <Person name={"ぷるぷる"} age={21} height={153}/>
    </div>
  );
}

export default App;
