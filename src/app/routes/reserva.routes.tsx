import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { ReservaStackParamList } from "./types/reserva.stack.paramlist";
import ReservasCliente from "../pages/Reservas/pages/cliente/reservas-cliente/ReservasCliente";
import AdministrarReserva from "../pages/Reservas/pages/restaurante/reserva-restaurante/AdministrarReserva";

const Stack = createStackNavigator<ReservaStackParamList>();

const ReservaRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReservaCliente" component={ReservasCliente} />
      <Stack.Screen name="ReservaRestaurante" component={AdministrarReserva} />
    </Stack.Navigator>
  );
};

export default ReservaRoutes;
