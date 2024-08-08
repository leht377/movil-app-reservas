import theme from "@/common/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import FormularioRegistroPlato from "./components/FormularioRegistroPlato";

const RegistrarPlato = () => {
  return (
    <View style={styles.container}>
      <FormularioRegistroPlato />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex:1,
  },
});
export default RegistrarPlato;
