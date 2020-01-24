import React from 'react';
import { Text, View, Button, SafeAreaView, FlatList } from 'react-native';
import Task from './model/taskModel';
import TaskListItem from './TaskListItem';

const tasks: Task[] = [
    {
        id: 1,
        title: '牛乳を買う',
        completed: false
    },
    {
        id: 2,
        title: 'ほうれん草を買う',
        completed: false
    },
    {
        id: 3,
        title: '醤油を買う',
        completed: true
    },
];

const TaskList = (props) => {
    return (
        <View>
            <Text>タスク一覧画面</Text>
            <SafeAreaView>
                <FlatList
                    data={tasks}
                    renderItem={({item}) => <TaskListItem task={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
            <Button 
            title="Press me"
            onPress={() => props.navigation.navigate('タスク詳細')}
            color={'#FFAA99'}
            />
        </View>
    );
}

export default TaskList;