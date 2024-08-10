import Button from "@/app/components/Button";
import FormikMultilineTextInput from "@/app/components/FormikMultilineTextInput";
import FormikTextInput from "@/app/components/FormikTextInput";
import SelectInput from "@/app/components/SelectInput";
import { Formik } from "formik";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import StyledText from "@/app/components/StyledText";
import MyIcon from "@/app/components/MyIcon";
import theme from "@/common/theme";
import MenuRestaurantes from "../../../Cliente/Restaurante-detalle/components/MenuRestaurantes";

const data = [
  { label: "Todas", value: undefined },
  { label: "Aceptadas", value: "aceptadas" },
  { label: "Pendientes", value: "pendientes" },
  { label: "Rechazadas", value: "rechazadas" },
];

const FormularioRegistroPlato = () => {
  const [images, setImages] = useState({
    fotoPrincipal: null,
    foto2: null,
    foto3: null,
  });

  const initialValues = {
    nombrePlato: "",
    descripcion: "",
    categoria: undefined,
    fotoPrincipal: null,
    foto2: null,
    foto3: null,
  };

  const elegirImagenes = async (key) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!resultado.canceled) {
      setImages((prevImages) => ({
        ...prevImages,
        [key]: resultado.assets[0].uri,
      }));
    }
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <View>
          <View style={styles.input}>
            <FormikTextInput
              name="nombrePlato"
              placeholder="Nombre del plato"
              label="Nombre del plato"
            />

            <SelectInput
              data={data}
              value={{ label: "Aceptadas", value: "aceptadas" }} // Valor fijo para visualización
              placeholder=" Selecciona una opción "
              onSelect={() => {}}
              label="Categoría"
            />

            <FormikMultilineTextInput
              name="descripcion"
              placeholder="Descripción"
              label="Descripción"
            />
            <View>
              <StyledText  fontWeight="bold" fontSize="title">Hashtag</StyledText>
              <MenuRestaurantes/>
            </View>
          </View>
          <View style={styles.imageContainer}>
            {["fotoPrincipal", "foto2", "foto3"].map((key, index) => (
              <View key={key} style={styles.imageSection}>
                <StyledText style={styles.text}>Foto {index + 1}</StyledText>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Image
                    source={{ uri: images[key] }}
                    style={styles.imagePreview}
                  />

                  <TouchableOpacity
                    onPress={() => elegirImagenes(key)}
                    style={styles.buttonImageSelect}
                  >
                    <MyIcon
                      nombre="cloud-upload-sharp"
                      tamano={20}
                      color="white"
                    />
                    <StyledText color="secondary">Seleccionar</StyledText>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.Button}>
            <Button color="primary" title="Registrar" fontWeight="bold" />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    gap: 10,
  },
  Button: {
    margin: 10,
    paddingBottom:10
  },
  imageContainer: {
    margin: 10,
  },
  imageSection: {
    marginBottom: 20,
  },
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.quaternary,
  },
  buttonImageSelect: {
    marginTop: 40,
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: "50%",
  },
  text: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default FormularioRegistroPlato;
