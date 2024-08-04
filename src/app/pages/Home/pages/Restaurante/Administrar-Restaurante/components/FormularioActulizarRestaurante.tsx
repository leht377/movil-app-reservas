import Button from "@/app/components/Button";
import FormikMultilineTextInput from "@/app/components/FormikMultilineTextInput";
import FormikTextInput from "@/app/components/FormikTextInput";
import { Field, Formik } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from 'react-native-modal-datetime-picker';
import theme from "@/common/theme";
import StyledText from "@/app/components/StyledText";
import Badge from "@/app/components/Badge";
import MyIcon from "@/app/components/MyIcon";

const initialValues = {
  descripcion: "",
  locacion: "",
  foto: null,
  horasServicio: { inicio: null, fin: null },
  diasServicio: [],
};

const handleSubmit = (values: any) => {
  console.log(values);
};

const FormularioActulizarRestaurante = () => {
  const [image, setImage] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [timeField, setTimeField] = useState(null);
  const [horasServicio, setHorasServicio] = useState({ inicio: null, fin: null });
  const [diasServicio, setDiasServicio] = useState([]);

  const elegirImage = async (
    setFieldValue: (Field: string, value: any) => void
  ) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!resultado.canceled) {
      const selecionarImgen = resultado.assets[0].uri;
      setImage(selecionarImgen);
      setFieldValue("foto", selecionarImgen);
    }
  };

  const showTimePicker = (field) => {
    setTimeField(field);
    setTimePickerVisibility(true);
  };

  const handleConfirm = (date) => {
    setTimePickerVisibility(false);
    setHorasServicio((prevState) => ({
      ...prevState,
      [timeField]: date
    }));
  };

  const toggleDay = (day) => {
    setDiasServicio((prevState) => 
      prevState.includes(day) 
        ? prevState.filter(d => d !== day) 
        : [...prevState, day]
    );
  };

  const formatTime = (time) => {
    if (!time) return '';
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <View style={styles.container}>
          <View>
            <FormikMultilineTextInput
              name="descripcion"
              placeholder="Escribe la descripción del restaurante..."
              label="Descripción"
            />
            <FormikTextInput
              name="locacion"
              placeholder="Locación"
              label="Locación"
            />
            <StyledText style={styles.text}>Foto del restuarante</StyledText>
            <View style={styles.row}>
              {image && (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: image }} style={styles.imagePreview} />
                </View>
              )}
              <View style={styles.inputContainer}>
                <FormikTextInput name="foto" placeholder="Foto" />
              </View>

              <Button
                title="Seleccionar"
                color="primary"
                fontWeight="bold"
                onPress={() => elegirImage(setFieldValue)}
              />
            </View>
            <View>
              <StyledText style={styles.text}>
                Horas de servicio
              </StyledText>
              <View style={styles.row}>
                <Badge text={`${formatTime(horasServicio.inicio)} - ${formatTime(horasServicio.fin)}`} icon="time" />
                <TouchableOpacity onPress={() => showTimePicker('inicio')}>
                  <MyIcon nombre={"add-circle-sharp"} tamano={32} color={theme.colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showTimePicker('fin')}>
                  <MyIcon nombre={"add-circle-sharp"} tamano={32} color={theme.colors.primary} />
                </TouchableOpacity>
              </View>
              <StyledText style={styles.text}>
                Días de servicio
              </StyledText>
              <View style={styles.row}>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
                  <TouchableOpacity key={day} onPress={() => toggleDay(day)}>
                    <Badge text={day} color={diasServicio.includes(day) ? theme.colors.primary : theme.colors.quinary} icon="today" />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.button}>
              <Button title="Actualizar" color="primary" fontWeight="bold" />
            </View>
          </View>
          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={() => setTimePickerVisibility(false)}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  imagePreview: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  button: {
    marginTop: 40,
  },
  text: {
    marginTop: 40,
    marginBottom: 5,
    fontSize: theme.fontSize.title,
    fontWeight: "bold",
  },
});

export default FormularioActulizarRestaurante;
