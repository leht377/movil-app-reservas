import { RegistrarRestauranteDto } from "@/dominio/dtos/registrat-restaurante.dtos";
import { useAppDispatch } from "@/redux/hooks/useAppDispatch";
import React from "react";
import { StyleSheet, View } from "react-native";
import { resgistrarRestaurante } from "@/redux/reducers/restaurantes.reducer";

const useRegistrarRestaurante = () => {
  const dispacth = useAppDispatch();

  const registrar = async (data: RegistrarRestauranteDto) => {
    try {
      const restaurante = RegistrarRestauranteDto.crear(data);
      // await dispacth(resgistrarRestaurante(restaurante)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  return { registrar };
};

export default useRegistrarRestaurante;
