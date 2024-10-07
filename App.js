import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true);

// const app = initializeApp(firebaseConfig);

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"
        backgroundColor="#5f9ea0" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
;