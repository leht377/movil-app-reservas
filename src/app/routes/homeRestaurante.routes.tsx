import { createStackNavigator } from '@react-navigation/stack'
import { HomeRestauranteStackParamslist } from './types/homeRestaurante.stack.paramslist'

import AdministrarRestaurante from '../pages/Home/pages/Restaurante/Administrar-Restaurante/AdministrarRestaurante'
import FotosInstalaciones from '../pages/Home/pages/Restaurante/Fotos-Instaciones/FotosInstalaciones'
import AdministrarReserva from '../pages/Reservas/pages/restaurante/reserva-restaurante/AdministrarReserva'
import AdministrarMenu from '../pages/Home/pages/Restaurante/Adminstrar-Menu/AdministrarMenu'
import HomeRestaurante from '../pages/Home/pages/Restaurante/Home-restaurante/HomeRestaurante'
import RegistrarPlato from '../pages/Home/pages/Restaurante/Registrar-Plato/RegistrarPlato'

const Stack = createStackNavigator<HomeRestauranteStackParamslist>()

const HomeRestauranteRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'RestaurantePage'} component={HomeRestaurante} />
      <Stack.Screen
        name={'AdministrarRestaurante'}
        component={AdministrarRestaurante}
        options={{ headerShown: true, title: 'Administrar' }}
      />

      <Stack.Screen
        name={'AdministrarMenu'}
        component={AdministrarMenu}
        options={{ headerShown: true, title: '' }}
      />

      <Stack.Screen
        name={'AdmnistrarReserva'}
        component={AdministrarReserva}
        options={{ headerShown: true, title: '' }}
      />

      <Stack.Screen
        name={'FotosInstaciones'}
        component={FotosInstalaciones}
        options={{ headerShown: true, title: 'Instalaciones' }}
      />
      <Stack.Screen
        name={'RegistrarPlato'}
        component={RegistrarPlato}
        options={{ headerShown: true, title: 'Registro de plato' }}
      />
    </Stack.Navigator>
  )
}

export default HomeRestauranteRoutes
