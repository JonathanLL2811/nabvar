import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../page/Home/Home';
import Configuraciones from '../page/Configuraciones/Configuraciones';
import Usuario from '../page/Usuario.tsx/Usuario';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Usuario" component={Usuario} />
        <Drawer.Screen name="Configuraciones" component={Configuraciones} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}