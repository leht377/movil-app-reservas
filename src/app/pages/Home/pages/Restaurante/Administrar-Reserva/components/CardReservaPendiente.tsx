import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import MyIcon from "@/app/components/MyIcon";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const CardReservaPendiente = () => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText
          fontWeight="bold"
          fontSize="title"
          style={styles.restaurantName}
        >
          Nombre Restaurante
        </StyledText>
      </View>

      <View style={styles.row}>
        {/* BADGE */}
        <View style={styles.badgeContainer}>
          <Badge icon="today" text="" />
          <Badge icon="time" text="" />
        </View>
      </View>

      {/* LOCATION */}
      <View style={styles.locationContainer}>
        <MyIcon nombre="person" tamano={25} />
        <StyledText fontWeight="bold" fontSize="title">
          Luis Eduardo
        </StyledText>
      </View>

      <View style={styles.locationContainer}>
        <MyIcon nombre="people" tamano={25} />
        <StyledText fontWeight="bold" fontSize="title">
          5 acompañantes
        </StyledText>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.Butones}>
          <Button color="green" title="Aceptar" />
        </View>
        <View style={styles.Butones}>
          <Button color="primary" title="Cancelar" />
        </View>
      </View>
      {/* <View style={styles.codeContainer}>
        <StyledText fontWeight="bold">CODIGO DE INGRESO</StyledText>
        <StyledText color="primary" fontWeight="bold" fontSize="title">
          431231
        </StyledText>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop:10,
   
  },
  restaurantName: {
    fontSize: 28,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  statusContainer: {
    flexDirection: "row",

    marginTop: 20,
    gap: 10,
  },
  Butones: {
    height: "100%",
    width: "40%",
  },
  codeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardReservaPendiente;
