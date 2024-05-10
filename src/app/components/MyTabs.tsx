import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomePage from '../pages/Home/pages/HomePage'
import FavoritosPages from '../pages/Favoritos/pages/FavoritosPages'
import ReservasPage from '../pages/Reservas/pages/ReservasPage'
import PerfilPage from '../pages/Perfil/pages/perfil/PerfilPage'
import MyIcon from './MyIcon'
import theme from '../../common/theme'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tertiary,
        tabBarStyle: {
          backgroundColor: theme.colors.secondary
        }
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
        component={PerfilPage}
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

// const styles = StyleSheet.create({})

export default MyTabs
