import Button from "@/app/components/Button";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CardReservaPendiente from "./components/CardReservaPendiente";
import SearchInput from "@/app/components/SearchInput";

const AdministrarReserva = () => {
  const [selectedButton, setSelectedButton] = useState("Pendientes");
  return (
    <View style={styles.container}>
      <View style={styles.ContenedorImagen}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
      </View>
      <ScrollView>
        <View style={styles.containerFecha}>
          <View style={styles.Fecha}>
            <StyledText fontWeight="bold" fontSize="title">
              Día
            </StyledText>
            <StyledText fontWeight="bold" fontSize="title">
              24 Marzo 2024
            </StyledText>
          </View>
          <View style={styles.buton}>
            <Button color="primary" fontWeight="bold" title="No reservas" />
          </View>
        </View>
        <View style={styles.searchInput}>
          <SearchInput
            placeholder="Nombre del reservante o código"
            value=""
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.buttonContainer}>
          {["Pendientes", "Aceptadas", "Rechazadas"].map((title) => (
            <TouchableOpacity
              key={title}
              style={[
                styles.button,
                selectedButton === title && styles.buttonSelected,
              ]}
              onPress={() => setSelectedButton(title)}
            >
              <StyledText
                color={selectedButton === title ? "secondary" : "quaternary"}
                fontWeight="bold"
              >
                {title}
              </StyledText>
            </TouchableOpacity>
          ))}
        </View>
        <CardReservaPendiente />
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
  },
  ContenedorImagen: {
    borderRadius: 2.5,
    borderWidth: 0.4,
    borderColor: theme.colors.quaternary,
    overflow: "hidden",
    height: "30%",
    margin: 10,
  },
  image: {
    flex: 1,
  },
  containerFecha: {
    flexDirection: "row",
    gap: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  Fecha: {},
  buton: {
    paddingTop: 10,
    height: "100%",
    width: "50%",
    marginLeft: 50,
  },
  searchInput: {
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 100,

    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  buttonSelected: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {},
  buttonTextSelected: {},
});
export default AdministrarReserva;
