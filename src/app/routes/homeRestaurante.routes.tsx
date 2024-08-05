import { createStackNavigator } from "@react-navigation/stack";
import { HomeRestauranteStackParamslist } from "./types/homeRestaurante.stack.paramslist";

import AdministrarRestaurante from "../pages/Home/pages/restaurante/Administrar-Restaurante/AdministrarRestaurante";
import FotosInstalaciones from "../pages/Home/pages/restaurante/Fotos-Instaciones/FotosInstalaciones";
import AdministrarReserva from "../pages/Home/pages/restaurante/Administrar-Reserva/AdministrarReserva";
import AdministrarMenu from "../pages/Home/pages/restaurante/Adminstrar-Menu/AdministrarMenu";
import HomeRestaurante from "../pages/Home/pages/restaurante/Home-restaurante/HomeRestaurante";

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
