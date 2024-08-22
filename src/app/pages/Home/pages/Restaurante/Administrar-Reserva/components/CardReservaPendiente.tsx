import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import MyIcon from "@/app/components/MyIcon";
import StyledText from "@/app/components/StyledText";
import theme from "@/common/theme";
import { EstadoReserva } from "@/common/utils/enums";
import { ReservaEntity } from "@/dominio/entities";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  reserva: ReservaEntity;
  onPressAceptar?: (idReserva: string) => void;
  onPressRechazar?: (idReserva: string) => void;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

const CardReservaPendiente: React.FC<Props> = ({
  reserva,
  onPressAceptar,
  onPressRechazar,
}) => {
  const fecha = reserva?.getFechaReserva()
    ? formatDate(reserva?.getFechaReserva())
    : undefined;
  const estado = reserva?.getEstado();

  return (
    <View style={styles.container}>
      <View>
        <StyledText
          fontWeight="bold"
          fontSize="title"
          style={styles.restaurantName}
        >
          {reserva?.getNombreRestaurante()}
        </StyledText>
      </View>

      <View style={styles.row}>
        <View style={styles.badgeContainer}>
          <Badge icon="today" text={fecha} />
          <Badge icon="time" text={reserva?.getHoraReserva()} />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <MyIcon nombre="person" tamano={25} />
        <StyledText fontWeight="bold" fontSize="title">
          {reserva?.getNombreCliente()}
        </StyledText>
      </View>
      <View style={{ flexDirection: "row", gap: 140 }}>
        <View style={styles.locationContainer}>
          <MyIcon nombre="people" tamano={25} />
          <StyledText fontWeight="bold" fontSize="title">
            {reserva?.getCantidadPersonas()}
          </StyledText>
        </View>

        <View style={styles.codeContainer}>
          <StyledText fontWeight="bold">CODIGO DE INGRESO</StyledText>
          <StyledText color="primary" fontWeight="bold" fontSize="title">
            {reserva?.getCodIngreso()}
          </StyledText>
        </View>
      </View>

      {estado === EstadoReserva.RECHAZADA ? null : estado ===
        EstadoReserva.ACEPTADA ? (
        <View style={styles.Butones}>
          <Button color="primary" title="Cancelar" />
        </View>
      ) : (
        <View style={styles.statusContainer}>
          <View style={styles.Butones}>
            <Button
              color="green"
              title="Aceptar"
              onPress={() => onPressAceptar?.(reserva.getId())}
            />
          </View>
          <View style={styles.Butones}>
            <Button
              color="primary"
              title="Rachazar"
              onPress={() => onPressRechazar?.(reserva.getId())}
            />
          </View>
        </View>
      )}
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
    marginTop: 10,
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
