import React from 'react';
import { View } from 'react-native';
import TaskList from '../TaskList';
import TaskDetail from '../TaskDetail';

const Root = () => {
  return (
    <View>
        <TaskList />
        <TaskDetail />
    </View>
  );
}

export default Root;
