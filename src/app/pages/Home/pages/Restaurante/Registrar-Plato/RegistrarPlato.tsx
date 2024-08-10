import theme from "@/common/theme";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import FormularioRegistroPlato from "./components/FormularioRegistroPlato";

const RegistrarPlato = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FormularioRegistroPlato />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
  },
});
export default RegistrarPlato;
