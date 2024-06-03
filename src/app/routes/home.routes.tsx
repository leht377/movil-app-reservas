import { createStackNavigator } from '@react-navigation/stack'

import { HomeStackParamList } from './types/home.stack.paramlist'

import HomeCliente from '../pages/Home/pages/Cliente/Home-cliente/HomeCliente'
import RestauranteDetalle from '../pages/Home/pages/Cliente/Restaurante-detalle/RestauranteDetalle'
import RestauranteClientePage from '../pages/Home/pages/Cliente/Restaurantes-cliente/RestauranteClientePage'

const Stack = createStackNavigator<HomeStackParamList>()

const HomeRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomePage' component={HomeCliente} />
      <Stack.Screen
        name='Restaurantes'
        component={RestauranteClientePage}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name='RestauranteDetalle'
        component={RestauranteDetalle}
        options={{ headerShown: true, title: '' }}
      />
    </Stack.Navigator>
  )
}

export default HomeRoutes
