import FormikMultilineTextInput from "@/app/components/FormikMultilineTextInput";
import FormikTextInput from "@/app/components/FormikTextInput";
import SelectInput from "@/app/components/SelectInput";
import { Formik } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const data = [
  { label: "Todas", value: undefined },
  { label: "Aceptadas", value: "aceptadas" },
  { label: "Pendientes", value: "pendientes" },
  { label: "Rechazadas", value: "rechazadas" },
];

const FormularioRegistroPlato = () => {
  const initialValues = {};

  const handleSubmit = () => {};
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <View>
        <View style={styles.input}>
          <FormikTextInput
            name="nombrePlato"
            placeholder="Nombre del plato"
            label="Nombre del plato"
          />
          <View style={{ height: "80%" }}>
            <SelectInput
              data={data}
              value={{ label: "Aceptadas", value: "aceptadas" }} // Valor fijo para visualización
              placeholder=" Selecciona una opción "
              onSelect={() => {}}
              label="Categoría"
            />
          </View>

          <FormikMultilineTextInput
            name="descripcion"
            placeholder="Descripción"
            label="Descripción"
          />
        </View>
      </View>
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    gap: 10,
  },
});
export default FormularioRegistroPlato;
