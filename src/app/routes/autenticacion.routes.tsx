import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import LoginCliente from '../pages/Autenticacion/page/login-cliente/LoginCliente'
import OpcionesRegistroPage from '../pages/Autenticacion/page/opciones-registro/OpcionesRegistroPage'
import RegistroCliente from '../pages/Autenticacion/page/registro-cliente/RegistroCliente'
import { AutenticacionStackParamList } from './types/autenticacion.stack.paramslist'

const Stack = createStackNavigator<AutenticacionStackParamList>()
const AutenticacionRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='OpcionesRegistro' component={OpcionesRegistroPage} />
      <Stack.Screen
        name='RegistroCliente'
        component={RegistroCliente}
        options={{ headerShown: true, title: 'Registro cliente' }}
      />
      <Stack.Screen name='Login' component={LoginCliente} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />  */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

export default AutenticacionRoutes
