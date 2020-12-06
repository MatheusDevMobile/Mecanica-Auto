import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../view/Home'
import Register from '../view/Register'
import ClientList from '../view/ClientList'

import { DrawerContent } from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

export default props => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{
          headerShown: true, title: 'Estoque',
          headerTintColor: '#fff',
          headerStyle: {
            justifyContent: 'center',
            backgroundColor: '#3498db',
          }
        }} />
        <Drawer.Screen name="Register" component={Register} options={{
          headerShown: true, title: 'Cadastro',
          headerTintColor: '#fff',
          headerStyle: {
            justifyContent: 'center',
            backgroundColor: '#3498db',
          }
        }} />
        <Drawer.Screen name="ClientList" component={ClientList} options={{
          headerShown: true, title: 'Fornecedores',
          headerTintColor: '#fff',
          headerStyle: {
            justifyContent: 'center',
            backgroundColor: '#3498db',
          }
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}