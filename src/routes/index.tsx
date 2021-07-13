import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Routes;
