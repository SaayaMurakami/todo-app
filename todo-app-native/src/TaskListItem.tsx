import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Task from './model/taskModel';

interface Props {
    task : Task
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9c2ff',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10
    }
});

const TaskListItem:React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.task.title}</Text>
            <Text>{props.task.completed ? '完了' : '未完了'}</Text>
        </View>
    );
}

export default TaskListItem;