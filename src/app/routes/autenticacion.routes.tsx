import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import LoginCliente from '../pages/Autenticacion/page/login-cliente/LoginCliente'
import OpcionesRegistroPage from '../pages/Autenticacion/page/opciones-registro/OpcionesRegistroPage'

const Stack = createStackNavigator()
const AutenticacionRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='OpcionesRegistro' component={OpcionesRegistroPage} />
      <Stack.Screen name='LoginCliente' component={LoginCliente} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />  */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default AutenticacionRoutes
