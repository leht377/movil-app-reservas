import SearchInput from "@/app/components/SearchInput";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from "react-native";
import Selector from "./components/Selector";
import theme from "@/common/theme";
import Button from "@/app/components/Button";
import CardPlato from "@/app/components/CardPlato";
import CardPlatoAdministrarMenu from "./components/CardPlatoAdministrarMenu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeRestauranteStackParamslist } from "@/app/routes/types/homeRestaurante.stack.paramslist";
import { useAppSelector } from "@/redux/hooks/useAppSelector";
import { MenuEntity, PlatoEntity } from "@/dominio/entities";
import { ObtenerMenuDto } from "@/dominio/dtos/obtener-menu.dto";
import { menuServices } from "@/services/menu.services";
import useObtenerCategorias from "./hooks/useObtenerCategorias";
import useCrearMenu from "./hooks/useCrearMenu";
import ModalStatusAceptarReserva from "@/app/pages/Reservas/pages/restaurante/reserva-restaurante/components/ModalStatusAceptarReserva";

const AdministrarMenu = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<HomeRestauranteStackParamslist>>();
  const [refreshing, setRefreshing] = useState(false);
  const [menu, setMenu] = useState<MenuEntity>(null);
  const [platos, setPlatos] = useState<PlatoEntity[]>([]);
  const [busqueda, setBusqueda] = useState<string>("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState<string>("");
  const { restaurante } = useAppSelector((state) => state.restaurante);
  const { categorias, loading } = useObtenerCategorias();
  const { status, error, crearMenu } = useCrearMenu();

  const renderItem = ({ item }) => {
    return <CardPlatoAdministrarMenu plato={item} />;
  };

  // useEffect(() => {
  //   console.log(restaurante);
  // }, [restaurante]);

  useEffect(() => {
    if (menu) {
      let platosFiltrados = menu.getPlatos();

      if (categoriaSeleccionada) {
        platosFiltrados = platosFiltrados.filter((plato) =>
          plato.getCategorias.some(
            (categoria) => categoria.getNombre() === categoriaSeleccionada
          )
        );
      }

      if (busqueda) {
        platosFiltrados = platosFiltrados.filter((plato) =>
          plato.getNombre.toLowerCase().includes(busqueda.toLowerCase())
        );
      }

      setPlatos(platosFiltrados);
    }
  }, [menu, categoriaSeleccionada, busqueda]);

  const obtenerMenu = async () => {
    try {
      const dto = ObtenerMenuDto.crear({
        menu_id: restaurante?.getMenuId(),
      });
      const menu = await menuServices.obtenerMenu(dto);
      setMenu(menu);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (restaurante && restaurante?.getMenuId()) obtenerMenu();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await obtenerMenu();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <SearchInput
          placeholder="Buscar plato..."
          value={busqueda}
          onChangeText={(texto) => setBusqueda(texto)}
        />
      </View>
      <View style={styles.selectInpunt}>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <Selector
            titulo="categoria"
            options={categorias.map((categoria) => categoria.getNombre())}
            onSelect={(categoria) => setCategoriaSeleccionada(categoria)}
          />
        )}
      </View>
      <View style={styles.Button}>
        {restaurante && restaurante.getMenuId() && (
          <View style={{ width: "80%" }}>
            <Button
              title="Agregar plato"
              color="primary"
              fontWeight="bold"
              onPress={() => navigate("RegistrarPlato")}
            />
          </View>
        )}

        {restaurante && !restaurante.getMenuId() && (
          <View style={{ width: "80%" }}>
            <Button
              title="Crear menu"
              color="primary"
              fontWeight="bold"
              onPress={() => crearMenu()}
            />
          </View>
        )}
      </View>
      {platos.length > 0 ? (
        <FlatList
          data={platos}
          renderItem={renderItem}
          nestedScrollEnabled
          keyExtractor={(item: PlatoEntity) => item.getId()}
          ListFooterComponent={<View style={{ height: 20 }} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      ) : null}

      <View style={styles.plato}></View>
      <ModalStatusAceptarReserva
        status={status}
        error={error}
        onClose={() => {}}
        texto="Creando menu"
        texto1="Menu creado exitosamente"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
  },
  searchInput: {
    margin: 20,
    elevation: 4,
  },
  selectInpunt: {
    flexDirection: "row",
    gap: 4,
    margin: 20,
    flexWrap: "wrap",
  },
  Button: {
    flexDirection: "row",
    gap: 10,
    width: "50%",
    marginLeft: 20,
    marginBottom: 10,
  },
  plato: {
    padding: 20,
  },
});

export default AdministrarMenu;
