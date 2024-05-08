import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomePage from '../app/Home/pages/HomePage'
import FavoritosPages from '../app/Favoritos/pages/FavoritosPages'
import ReservasPage from '../app/Reservas/pages/ReservasPage'
import PerfilPage from '../app/Perfil/pages/PerfilPage'
import MyIcon from './MyIcon'
import theme from '../common/theme'

const Tab = createBottomTabNavigator()

//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, focused, size }) => {
//         let iconName
//         if (route.name === 'Welcome') {
//           iconName = focused
//             ? 'information-circle'
//             : 'information-circle-outline'
//         } else if (route.name === 'Menu') {
//           iconName = 'list'
//         }
//         return <Ionicons name={iconName} size={size} color={color} />
//       },
//       tabBarActiveTintColor: 'tomato',
//       tabBarInactiveTintColor: 'gray'
//     })}
//   >

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
