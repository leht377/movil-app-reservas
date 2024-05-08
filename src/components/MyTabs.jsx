import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomePage from '../app/Home/pages/HomePage'
import FavoritosPages from '../app/Favoritos/pages/FavoritosPages'
import ReservasPage from '../app/Reservas/pages/ReservasPage'
import PerfilPage from '../app/Perfil/pages/PerfilPage'

const Tab = createBottomTabNavigator()
const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName='HomePage'>
      <Tab.Screen name='HomePage' component={HomePage} />
      <Tab.Screen name='FavoritosPage' component={FavoritosPages} />
      <Tab.Screen name='ReservasPage' component={ReservasPage} />
      <Tab.Screen name='PerfilPage' component={PerfilPage} />
    </Tab.Navigator>
  )
}

// const styles = StyleSheet.create({})

export default MyTabs
