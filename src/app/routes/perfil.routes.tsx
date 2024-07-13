import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PerfilCliente from '../pages/Perfil/pages/perfil-cliente/PerfilCliente'
import PerfilRestaurante from '../pages/Perfil/pages/perfil-restaurante/PerfilRestaurante'
const Stack = createStackNavigator()

const PerfilRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='perfil-cliente' options={{ title: 'Perfil' }} component={PerfilCliente} />
      <Stack.Screen name='perfil-restaurante' component={PerfilRestaurante} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default PerfilRoutes
