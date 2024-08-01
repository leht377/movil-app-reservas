import { createStackNavigator } from "@react-navigation/stack";
import { HomeRestauranteStackParamslist } from "./types/homeRestaurante.stack.paramslist";
import HomeRestaurante from "../pages/Home/pages/Restaurante/Home-restaurante/HomeRestaurante";
import AdministrarRestaurante from "../pages/Home/pages/Restaurante/Administrar-Restaurante/AdministrarRestaurante";
import AdministrarMenu from "../pages/Home/pages/Restaurante/Adminstrar-Menu/AdministrarMenu";
import AdministrarReserva from "../pages/Home/pages/Restaurante/Administrar-Reserva/AdministrarReserva";
import FotosInstalaciones from "../pages/Home/pages/Restaurante/Fotos-Instaciones/FotosInstalaciones";

const Stack = createStackNavigator<HomeRestauranteStackParamslist>();

const HomeRestauranteRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"RestaurantePage"} component={HomeRestaurante} />
      <Stack.Screen
        name={"AdministrarRestaurante"}
        component={AdministrarRestaurante}
        options={{ headerShown: true, title: "" }}
      />

      <Stack.Screen
        name={"AdministrarMenu"}
        component={AdministrarMenu}
        options={{ headerShown: true, title: "" }}
      />

      <Stack.Screen
        name={"AdmnistrarReserva"}
        component={AdministrarReserva}
        options={{ headerShown: true, title: "" }}
      />

      <Stack.Screen
        name={"FotosInstaciones"}
        component={FotosInstalaciones}
        options={{ headerShown: true, title: "" }}
      />
    </Stack.Navigator>
  );
};

export default HomeRestauranteRoutes;
