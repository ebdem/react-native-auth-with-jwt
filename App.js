import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Loading } from './src/components/common';
import Auth from "./src/screens/Auth";
import LoggedIn from "./src/screens/LoggedIn"

export default function App() {
  return(
    <LoggedIn />
  )
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


