import React from 'react';
import { StyleSheet, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
  });

const CustomButton = () => {
    return (
        <Button 
            title="Press me" 
            color="#f194ff" 
            onPress={() => Alert.alert('androidやで！')}
        />
    );
}

export default CustomButton;