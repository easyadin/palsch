import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Login from './authorization/Login';



export default function App() {
  return (
     <Login />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
