import { createStackNavigator } from '@react-navigation/stack'
import HomeCliente from '../pages/Home/pages/Home-cliente/HomeCliente'
import RestauranteClientePage from '../pages/Home/pages/Restaurantes-cliente/RestauranteClientePage'
import { HomeStackParamList } from './types/home.stack.paramlist'

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
    </Stack.Navigator>
  )
}

export default HomeRoutes
