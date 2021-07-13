import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {StatusBar} from 'react-native';
import Colors from './styles/colors';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar backgroundColor={`${Colors.primary}`} translucent />
    </NavigationContainer>
  );
};

export default App;
