import React from "react";
import { View, StyleSheet, TextInput, GestureResponderEvent,} from "react-native";
import StyledTextInput from "../../../../../components/StyledTextInput";
import Button from "../../../../../components/Button";
import * as Yup from "yup";
import StyledText from "../../../../../components/StyledText";
import FormikTextInput from "../../../../../components/FormikTextInput";
import { Formik } from "formik";

interface MyFromValues {
  nombre: string;
  locacion: string;
  correo: string;
  contrasena: string;
}

const RegistroRestauranteSchema = Yup.object().shape({
  nombre: Yup.string()
    .max(50, "Nombre demasiado largo!")
    .min(3, "Nombre demasiado corto!")
    .required("El nombre es requerido"),

  locacion: Yup.string()
    .max(50, "Dirección demasiado larga!")
    .min(2, "Dirección demasiado corta!")
    .required("La dirección es requerida"),

  correo: Yup.string()
    .email("Correo invalido")
    .required("el correo es requerido"),

  contrasena: Yup.string()
    .max(50, "Contraseña demasiado larga!")
    .min(5, "Contraseña demasiado corta!")
    .required("La contraseña es requerida"),
});

const FormularioRegistroRestaurante = ({ onSubmit }) => {
  const handleSubmitForm = ({ nombre, locacion, correo, contrasena }) => {
    onSubmit({nombre: nombre, locacion: locacion, correo: correo, contrasena: contrasena});
  };

  const initialValues: MyFromValues = {nombre: "", locacion: "", correo: "", contrasena: "",};
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistroRestauranteSchema}
      onSubmit={handleSubmitForm}
    >
      {({handleChange, handleBlur, handleSubmit, errors, values, touched,}) => (
        <View style={{ gap: 10 }}>
          <FormikTextInput name="nombre" placeholder="Nombre" />
          <FormikTextInput name="locacion" placeholder="Dirección" />
          <FormikTextInput name="correo" placeholder="Correo" />
          <FormikTextInput name="contrasena" placeholder="Contraseña" keyboardType="password"/>
          <Button
            color="primary"
            buttonStyle={{ paddingVertical: 10 }}
            onPress={handleSubmit as (
                values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined
              ) => void
            }
            title="Registrarse como restaurante"
          />
        </View>
      )}
    </Formik>
  );
};

export default FormularioRegistroRestaurante;
