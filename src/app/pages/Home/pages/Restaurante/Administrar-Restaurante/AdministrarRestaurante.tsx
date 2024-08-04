import { ScrollView, StyleSheet, View } from "react-native";
import RestauranteCarbasico from "../components/RestauranteCarbasico";
import FormularioActulizarRestaurante from "./components/FormularioActulizarRestaurante";
import theme from "@/common/theme";

const AdministrarRestaurante = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <RestauranteCarbasico />
      </View>

      <View style={styles.formulario}>
        <FormularioActulizarRestaurante />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
  },
  card: {
    marginTop: 20,
    marginBottom:30
  },
  formulario:{
   marginBottom:30
  }
});
export default AdministrarRestaurante;
