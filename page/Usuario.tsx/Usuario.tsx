import { View, Text } from 'react-native'
import React from 'react'
import ContextProvider from '../../context/ContextProvider'
import FormularioContacto from "../../componentes/FormularioContacto"

export default function Usuario() {
  return (
    <View>
      <ContextProvider>
      <FormularioContacto/>
      </ContextProvider>
      <Text>Usuario</Text>
    </View>
  );
}