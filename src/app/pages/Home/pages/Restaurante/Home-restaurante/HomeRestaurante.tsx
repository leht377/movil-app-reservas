import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import OpcionesRestauranteSection from "./components/OpcionesRestauranteSection";
import Button from "@/app/components/Button";
import StyledText from "@/app/components/StyledText";
import MyIcon from "@/app/components/MyIcon";
import theme from "@/common/theme";
import RestauranteCarbasico from "../components/RestauranteCarbasico";

const HomeRestaurante = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <OpcionesRestauranteSection />
      <View style={styles.NotificacionsBotton}>
        <Button color="secondary" textColor="black" containerStyle={{elevation:3}} >
          <View style={styles.iconLeft}>
            <MyIcon
              nombre={"notifications-sharp"}
              tamano={25}
              color={theme.colors.primary}
            />
            
          </View>

          <StyledText>Tiene 5 reservas por confirmar</StyledText>
          <View style={styles.iconRight}>
            <MyIcon
              nombre={"close"}
              tamano={25}
              color={theme.colors.tertiary}
            />
          </View>
        </Button>
      </View>
      <View style={styles.card}>
        <RestauranteCarbasico />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.secondary,
  
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
    margin: 20,    
  },
  card: {
    paddingBottom: 50,
  },
});

export default HomeRestaurante;
