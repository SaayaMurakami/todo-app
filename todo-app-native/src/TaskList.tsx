import React from 'react';
import { Text, View, Button } from 'react-native';


const TaskList = (props) => {
    return (
        <View>
            <Text>タスク一覧画面</Text>
            <Button 
            title="Press me"
            onPress={() => props.navigation.navigate('タスク詳細')}
            color={'#FFAA99'}
            />
        </View>
    );
}

export default TaskList;