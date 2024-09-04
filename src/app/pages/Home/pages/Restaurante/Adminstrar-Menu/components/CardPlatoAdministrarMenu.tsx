import StyledText from "@/app/components/StyledText";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import theme from "@/common/theme";
import MyIcon from "@/app/components/MyIcon";
import { PlatoEntity } from "@/dominio/entities";

interface Props {
  plato: PlatoEntity;
}

const CardPlatoAdministrarMenu: React.FC<Props> = ({ plato }) => {
  return (
    <View style={styles.container}>
      <StyledText fontSize="title" fontWeight="bold">
        {plato?.getNombre}
      </StyledText>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: plato.getFotoPrincipal }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageColumn}>
            {plato.getFotosSecundarias.slice(0, 2).map((i) => (
              <Image
                source={{ uri: i }}
                style={styles.image}
                key={i}
                resizeMode="cover"
              />
            ))}
            <View style={styles.imageSeparator} />
          </View>
        </View>

        <View style={styles.dataContainer}>
          <View style={styles.description}>
            <StyledText align="justify">
              <StyledText fontWeight="bold">Descripción: </StyledText>
              {plato?.getDescripcion}
            </StyledText>
          </View>

          {/* CATEGORÍAS */}
          <View style={styles.categoriesContainer}>
            <StyledText fontWeight="bold">Categorías: </StyledText>
            {plato.getCategorias.map((categoria) => (
              <View style={styles.categoryChip} key={categoria?.getId()}>
                <StyledText
                  color="primary"
                  fontWeight="bold"
                  fontSize="bodymini"
                >
                  {`#${categoria?.getNombre()}`}
                </StyledText>
              </View>
            ))}
          </View>

          {/* HASHTAGS */}
          <View style={styles.hashtagsContainer}>
            <StyledText fontWeight="bold">Hashtags: </StyledText>
            {plato.getHastags.map((hashtag) => (
              <View style={styles.hashtagChip} key={hashtag?.getId()}>
                <StyledText
                  fontWeight="bold"
                  fontSize="bodymini"
                  color="primary"
                >
                  {`#${hashtag?.getNombre()}`}
                </StyledText>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: theme.colors.secondary,
    minHeight: 120,
    padding: 20,
  },
  card: {
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: theme.colors.quaternary,
    overflow: "hidden",
  },
  imageContainer: {
    height: 140,
    flexDirection: "row",
    gap: 2,
  },
  image: {
    flex: 1,
  },
  imageColumn: {
    flex: 1,
  },
  imageSeparator: {
    height: 2,
    backgroundColor: theme.colors.secondary,
  },
  dataContainer: {
    padding: 10,
    gap: 4, // Aumentar para mejor separación visual
  },
  description: {
    flexDirection: "row",
    marginBottom: 2,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4, // Mejor separación entre categorías
    marginBottom: 2,
  },
  categoryChip: {
    backgroundColor: theme.colors.secondary, // Color de fondo más visible
    // paddingVertical: 6,
    // paddingHorizontal: 12,
    // borderRadius: 20,
    // elevation: 3,
  },
  hashtagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4, // Mejor separación entre hashtags
  },
  hashtagChip: {
    backgroundColor: theme.colors.secondary, // Color de fondo más visible
    // paddingVertical: 6,
    // paddingHorizontal: 12,
    // borderRadius: 20,
    // elevation: 3,
  },
});

export default CardPlatoAdministrarMenu;
