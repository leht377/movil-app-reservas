import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import theme from '../../common/theme'

import ReservasPage from '../pages/Reservas/pages/ReservasPage'
import FavoritosPages from '../pages/Favoritos/pages/FavoritosPages'
import MyIcon from '../components/MyIcon'
import PerfilRoutes from './perfil.routes'
import AutenticacionRoutes from './autenticacion.routes'
import HomeRoutes from './home.routes'
import ReservaRoutes from './reserva.routes'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import useValidarUsuario from '../hooks/useValidarUsuario'
import { AppStackParamList } from './types/app.stack.paramlist'
import { UsuarioRol } from '@/common/utils/enums'
import HomeRestauranteRoutes from './homeRestaurante.routes'

const Tab = createBottomTabNavigator<AppStackParamList>()

const AppRoutes = () => {
  const { usuario } = useAppSelector((state) => state.usuario)
  const { cliente } = useAppSelector((state) => state.cliente)
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { validarUsuario } = useValidarUsuario()

  // Estado de carga
  const [loading, setLoading] = useState(true)

  // Validar usuario y manejar splash
  useEffect(() => {
    const validarYFinalizar = async () => {
      await validarUsuario() // Asegurarse de que validarUsuario sea una función asíncrona que devuelve una promesa
      setLoading(false) // Una vez validado, quita el splash
    }

    validarYFinalizar()
  }, [usuario])


  // Componente del splash personalizado (puede ser reemplazado con react-native-splash-screen)
  if (loading) {
    return (
      <View style={styles.splashContainer}>
        <ActivityIndicator size='large' color={theme.colors.primary} />
      </View>
    )
  }

  // Aquí va la navegación principal después de la validación
  const HomeComponete =
    usuario?.getRol() === UsuarioRol.RESTAURANTE ? HomeRestauranteRoutes : HomeRoutes

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
      initialRouteName='Home'
    >
      <Tab.Screen
        name='Home'
        component={HomeComponete}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <MyIcon color={color} tamano={size} nombre='home' />
        }}
      />
      {usuario && usuario.getRol() === UsuarioRol.CLIENTE && (
        <>
          <Tab.Screen
            name='ReservasPage'
            component={usuario ? ReservaRoutes : AutenticacionRoutes}
            options={{
              title: 'Reservas',
              tabBarIcon: ({ color, size }) => (
                <MyIcon color={color} tamano={size} nombre='calendar' />
              )
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
        </>
      )}
      <Tab.Screen
        name='PerfilPage'
        component={usuario ? PerfilRoutes : AutenticacionRoutes}
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

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary // Puedes personalizar este color
  }
})

export default AppRoutes
