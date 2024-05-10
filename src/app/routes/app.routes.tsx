import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../common/theme'
import HomePage from '../pages/Home/pages/HomePage'
import ReservasPage from '../pages/Reservas/pages/ReservasPage'
import FavoritosPages from '../pages/Favoritos/pages/FavoritosPages'

import MyIcon from '../components/MyIcon'
import PerfilRoutes from './perfil.routes'
import AutenticacionRoutes from './autenticacion.routes'

const Tab = createBottomTabNavigator()
const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary
        },
        headerShown: false
      }}
      initialRouteName='HomePage'
    >
      <Tab.Screen
        name='HomePage'
        component={HomePage}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <MyIcon color={color} tamano={size} nombre='home' />
        }}
      />
      <Tab.Screen
        name='ReservasPage'
        component={ReservasPage}
        options={{
          title: 'Reservas',
          tabBarIcon: ({ color, size }) => <MyIcon color={color} tamano={size} nombre='calendar' />
        }}
      />
      <Tab.Screen
        name='FavoritosPage'
        component={FavoritosPages}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => <MyIcon color={color} tamano={size} nombre='heart' />
        }}
      />
      <Tab.Screen
        name='PerfilPage'
        component={false ? PerfilRoutes : AutenticacionRoutes}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MyIcon color={color} tamano={size} nombre='person-circle' />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default AppRoutes
