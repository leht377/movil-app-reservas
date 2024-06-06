import { KeyboardAvoidingView, View, StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import ChefIcon from "@/app/icons/ChefIcon";
import LoveIcon from "@/app/icons/LoveIcon";
import CorazonIcon from "@/app/icons/CorazonIcon";
import theme from "../../../../../common/theme";
import FormularioRegistroRestaurante from "./formularios/FormularioResgistroRestaurante";
import StyledText from "@/app/components/StyledText";
import CoffeIcon from "@/app/components/CoffeIcon";

const RegistroRestaurantePage = () => {
  return (
    <KeyboardAvoidingView style={styles.topContainer}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <LoveIcon />
          </View>
          <View style={styles.iconContainer}>
            <ChefIcon />
            <View style={styles.corazonContainer}>
              <CorazonIcon />
            </View>
          </View>

          <FormularioRegistroRestaurante onSubmit={""} />
          <View style={styles.containerPoliticas}>
            <StyledText fontSize="bodymini" align="center">
              Al continuar, aceptas las{" "}
              <StyledText fontSize="bodymini" color="primary">
                condiciones de servicios
              </StyledText>{" "}
              y
              <StyledText fontSize="bodymini" color="primary">
                {" "}
                la politica de privacidad
              </StyledText>
            </StyledText>
          </View>
          <View style={styles.containerIconCoffe}>
            <CoffeIcon />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
  },

  container: {
    gap: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    paddingVertical: 5,
  },
  iconContainer: {
    alignItems: "center",
    position: "relative",
  },
  corazonContainer: {
    position: "absolute",
    right: 0,
    top: "100%",
    marginTop: -10,
  },
  containerPoliticas: {},

  containerIconCoffe: {
    alignItems: "flex-end",
    marginRight: 110,
    marginBottom: 10,
  },
});

export default RegistroRestaurantePage;
