import SearchInput from "@/app/components/SearchInput";
import React from "react";
import { StyleSheet, View } from "react-native";
import Selector from "./components/Selector";
import theme from "@/common/theme";
import Button from "@/app/components/Button";
import CardPlato from "@/app/components/CardPlato";
import CardPlatoAdministrarMenu from "./components/CardPlatoAdministrarMenu";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeRestauranteStackParamslist } from "@/app/routes/types/homeRestaurante.stack.paramslist";

const AdministrarMenu = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<HomeRestauranteStackParamslist>>();
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <SearchInput
          placeholder="Buscar plato..."
          value=""
          onChangeText={() => {}}
        />
      </View>
      <View style={styles.selectInpunt}>
        <Selector titulo="categoria" options={["locooooooooooooooooooo"]} />
        <Selector titulo="Estado" options={["mocooooooo"]} />
      </View>
      <View style={styles.Button}>
        <Button
          title="Agregar"
          color="primary"
          fontWeight="bold"
          onPress={() => navigate("RegistrarPlato")}
        />
      </View>

      <View style={styles.plato}>
        <CardPlatoAdministrarMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex:1,
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
    width: "40%",
    marginLeft: 20,
    marginBottom: 10,
  },
  plato: {
    padding: 20,
  },
});

export default AdministrarMenu;
