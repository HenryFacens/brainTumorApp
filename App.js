import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);


import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"
        backgroundColor="#38A69D" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
;