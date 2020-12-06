import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../App'
import Drawer from '../../src/routes/Drawer'

const Stack = createStackNavigator();

export default props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}