import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OpcionesRestauranteSection from "./components/OpcionesRestauranteSection";
import Button from "@/app/components/Button";
import StyledText from "@/app/components/StyledText";
import MyIcon from "@/app/components/MyIcon";
import theme from "@/common/theme";

const HomeRestaurante = () => {
  return (
    <View style={styles.container}>
      <View>
        <OpcionesRestauranteSection />
      </View>
      <View style={styles.NotificacionsBotton}>
        <Button color="secondary" textColor="black">
          <View style={styles.iconLeft}>
            <MyIcon
              nombre={"notifications-sharp"}
              tamano={25}
              color={theme.colors.primary}
            />
          </View>

          <StyledText>Tiene 5 reservas por confirmar </StyledText>
          <View style={styles.iconRight}>
            <MyIcon
              nombre={"close"}
              tamano={25}
              color={theme.colors.tertiary}
            />
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  iconRight: {
    flex: 1,
    alignItems: "flex-end",
  },

  NotificacionsBotton: {
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default HomeRestaurante;
