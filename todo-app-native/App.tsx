import React from 'react';
import Root from './src/root/Root';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Root />
  );
}
