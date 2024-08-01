import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import MyIcon from "@/app/components/MyIcon";
import StartCalificacion from "@/app/components/StartCalificacion";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import { useAppSelector } from "@/redux/hooks/useAppSelector";

const RestauranteCarbasico = () => {
  const { restaurante } = useAppSelector((state) => state.restaurante);
  const foto =
    restaurante?.getUrlFotoRestaurante()[0] ||
    "https://app-reservas-e9linvk2bxlahg9.s3.sa-east-1.amazonaws.com/mediterraneo-market-cafe.webp";

  const calificacion = restaurante?.getCalificacionPromedio();
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: foto }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            <StartCalificacion
              calificacion={calificacion}
              disable
              starSize={20}
            />
          </View>
          <StyledText fontSize="body" fontWeight="bold">
            {restaurante?.getCantidadResenas()?.toLocaleString("en")} Reseñas
          </StyledText>
        </View>
        <StyledText style={styles.descripcion}>
          {restaurante?.getDescripcion()}
        </StyledText>
        <View style={styles.locationContainer}>
          <MyIcon nombre={"location"} tamano={20} />
          <StyledText fontWeight="bold" fontSize="title">
            {restaurante?.getLocacion()}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondary,
    elevation: 2,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 170,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },
  infoContainer: {
    padding: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  starsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  descripcion: {
    flexShrink: 1,
    flexWrap: "wrap",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
});

export default RestauranteCarbasico;
