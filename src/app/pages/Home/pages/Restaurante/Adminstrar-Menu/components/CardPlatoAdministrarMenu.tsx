import StyledText from "@/app/components/StyledText";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import theme from "@/common/theme";
import Button from "@/app/components/Button";
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
            source={{
              uri: plato.getFotoPrincipal,
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageColumn}>
            {plato.getFotosSecundarias.slice(0, 2).map((i) => {
              return (
                <Image
                  source={{
                    uri: i,
                  }}
                  style={styles.image}
                  key={i}
                  resizeMode="cover"
                />
              );
            })}

            <View style={styles.imageSeparator} />
          </View>
        </View>
        {/* SECTION DATA */}
        <View style={styles.dataContainer}>
          {/* DESCRIPCION */}
          <View style={styles.description}>
            <StyledText align="justify">
              <StyledText fontWeight="bold">Descripción: </StyledText>
              {plato && plato?.getDescripcion}
            </StyledText>
          </View>
          {/* HASTAGS */}
          <View style={styles.hashtags}>
            {plato.getHastags.map((hashtag) => (
              <StyledText
                key={hashtag?.getId()}
                color="primary"
                fontWeight="bold"
              >{`#${hashtag?.getNombre()}`}</StyledText>
            ))}
          </View>

          <View style={styles.botones}>
            <View
              style={{
                backgroundColor: theme.colors.primary,
                padding: 4,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <MyIcon
                  nombre={"trash-outline"}
                  tamano={30}
                  color={theme.colors.secondary}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.green,
                padding: 4,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <MyIcon
                  nombre={"pencil"}
                  tamano={30}
                  color={theme.colors.secondary}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.tertiary,
                padding: 4,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <MyIcon
                  nombre={"eye"}
                  tamano={30}
                  color={theme.colors.secondary}
                />
              </TouchableOpacity>
            </View>
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
    gap: 2,
  },
  description: {
    flexDirection: "row",
  },
  hashtags: {
    flexDirection: "row",
    gap: 5,
  },
  botones: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
});

export default CardPlatoAdministrarMenu;
