import StyledText from "@/app/components/StyledText";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import theme from "@/common/theme";
import Button from "@/app/components/Button";
import MyIcon from "@/app/components/MyIcon";

const CardPlatoAdministrarMenu = () => {
  return (
    <View style={styles.container}>
      <StyledText fontSize="title" fontWeight="bold">
        Nombre del plato
      </StyledText>
      <View style={styles.card}>
        {/* SECTION FOTOS */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://via.placeholder.com/150",
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.imageColumn}>
            <Image
              source={{
                uri: "https://via.placeholder.com/150",
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.imageSeparator} />
            <Image
              source={{
                uri: "https://via.placeholder.com/150",
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>
        {/* SECTION DATA */}
        <View style={styles.dataContainer}>
          {/* DESCRIPCION */}
          <View style={styles.description}>
            <StyledText align="justify">
              <StyledText fontWeight="bold">Descripción: </StyledText>
              Aquí va la descripción del plato.
            </StyledText>
          </View>
          {/* HASTAGS */}
          <View style={styles.hashtags}>
            <StyledText color="primary" fontWeight="bold">
              #Hashtag1
            </StyledText>
            <StyledText color="primary" fontWeight="bold">
              #Hashtag2
            </StyledText>
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
  },
  card: {
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: theme.colors.quaternary,
    overflow: "hidden",
  },
  imageContainer: {
    height: 160,
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
