import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import LoginCliente from '../pages/Autenticacion/page/login-cliente/LoginCliente'
import OpcionesRegistroPage from '../pages/Autenticacion/page/opciones-registro/OpcionesRegistroPage'
import RegistroCliente from '../pages/Autenticacion/page/registro-cliente/RegistroCliente'
import { AutenticacionStackParamList } from './types/autenticacion.stack.paramslist'
import RegistroRestaurantePage from '../pages/Autenticacion/page/registro-restaurante/RegistroRestaurantePage'
import Login from '../pages/Autenticacion/page/login/Login'

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
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen
        name='RegistroRestaurante'
        component={RegistroRestaurantePage}
        options={{ headerShown: true, title: 'Registro restaurante' }}
      />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} />  */}
    </Stack.Navigator>
  )
}

export default AutenticacionRoutes
