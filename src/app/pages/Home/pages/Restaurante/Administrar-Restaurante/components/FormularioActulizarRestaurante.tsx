import Button from '@/app/components/Button'
import FormikMultilineTextInput from '@/app/components/FormikMultilineTextInput'
import FormikTextInput from '@/app/components/FormikTextInput'
import { Field, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import DateTimePicker from 'react-native-modal-datetime-picker'
import theme from '@/common/theme'
import StyledText from '@/app/components/StyledText'
import Badge from '@/app/components/Badge'
import MyIcon from '@/app/components/MyIcon'
import { DiasServicioRestaurante, HorasServicioRestaurante } from '@/common/utils/enums'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useActualizarRestaurante from './hooks/useActualizarRestaurante'

const initialValues = {
  descripcion: '',
  locacion: '',
  foto: null,
  horasServicio: [],
  diasServicio: []
}

const dataDiasServicio = Object.keys(DiasServicioRestaurante).map((d) => ({ label: d, value: d }))

const FormularioActulizarRestaurante = () => {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset>(null)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
  const [timeField, setTimeField] = useState(null)
  const [horasServicio, setHorasServicio] = useState([])
  const [diasServicio, setDiasServicio] = useState([])
  const { actualizarDataRestaurante, status_actualizacion } = useActualizarRestaurante()

  const handleSubmit = async (values: any) => {
    const d = {
      descripcion: values?.descripcion,
      foto_restaurante: image,
      horas_servicios: values?.horasServicio,
      dias_servicios: values?.diasServicio
    }
    console.log(d)
    await actualizarDataRestaurante(d)
  }

  useEffect(() => {
    console.log(status_actualizacion)
  }, [status_actualizacion])

  const elegirImage = async (setFieldValue: (Field: string, value: any) => void) => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })
    if (!resultado.canceled) {
      const selecionarImgen = resultado.assets[0]
      setImage(selecionarImgen)
      setFieldValue('foto', selecionarImgen.fileName)
    }
  }

  const showTimePicker = (field) => {
    setTimeField(field)
    setTimePickerVisibility(true)
  }

  const handleDeleteHora = (hora, setFieldValue: (Field: string, value: any) => void) => {
    const newState = horasServicio.filter((h) => h != hora)
    setHorasServicio(newState)
    setFieldValue('horasServicio', newState)
  }

  const handleConfirm = (time, setFieldValue: (Field: string, value: any) => void) => {
    setTimePickerVisibility(false)
    const hours = time.getHours()
    const minutes = '0'
    const newState = [
      ...new Set([...horasServicio, `${hours}:${minutes.toString().padStart(2, '0')}`])
    ]
    setFieldValue('horasServicio', newState)
    setHorasServicio(newState)
  }

  const toggleDay = (day, setFieldValue: (Field: string, value: any) => void) => {
    const newState = diasServicio.includes(day)
      ? diasServicio.filter((d) => d !== day)
      : [...diasServicio, day]
    setDiasServicio(newState)
    setFieldValue('diasServicio', newState)
  }

  const formatTime = (time) => {
    if (!time) return ''
    const [hours, minutes] = time.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12 // Convert to 12-hour format
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, handleSubmit, values }) => (
        <View style={styles.container}>
          <View>
            <FormikMultilineTextInput
              name='descripcion'
              placeholder='Descripción del restaurante'
              label='Descripción'
            />
            <FormikTextInput name='locacion' placeholder='Locación' label='Locación' />
            <StyledText style={styles.text}>Foto del restuarante</StyledText>
            <View style={styles.row}>
              {image && (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: image.uri }} style={styles.imagePreview} />
                </View>
              )}
              <View style={styles.inputContainer}>
                <FormikTextInput name='foto' placeholder='Foto' disable={true} />
              </View>
              <Button
                title='Seleccionar'
                color='primary'
                buttonStyle={{ flex: 1 }}
                fontWeight='bold'
                onPress={() => elegirImage(setFieldValue)}
              />
            </View>
            <View>
              <StyledText style={styles.text}>Horas de servicio</StyledText>

              <View style={[styles.row, { flexWrap: 'wrap', marginTop: 10 }]}>
                {horasServicio.map((hora) => (
                  <View style={{ flexDirection: 'row', position: 'relative' }} key={hora}>
                    <View style={{ position: 'absolute', top: -12, right: -12, zIndex: 10 }}>
                      <TouchableOpacity onPress={() => handleDeleteHora(hora, setFieldValue)}>
                        <MyIcon nombre={'close-circle'} tamano={30} color={theme.colors.primary} />
                      </TouchableOpacity>
                    </View>
                    <Badge key={hora} text={`${formatTime(hora)}`} icon='time' />
                  </View>
                ))}

                <TouchableOpacity onPress={() => showTimePicker('inicio')}>
                  <MyIcon nombre={'add-circle-sharp'} tamano={36} color={theme.colors.primary} />
                </TouchableOpacity>
              </View>
              <StyledText style={styles.text}>Días de servicio</StyledText>
              <View style={[styles.row, { flexWrap: 'wrap' }]}>
                {dataDiasServicio.map(({ label, value }) => (
                  <TouchableOpacity key={value} onPress={() => toggleDay(value, setFieldValue)}>
                    <Badge
                      text={label}
                      color={
                        diasServicio.includes(value) ? theme.colors.primary : theme.colors.quinary
                      }
                      icon='today'
                      iconColor={
                        diasServicio.includes(value)
                          ? theme.colors.secondary
                          : theme.colors.quaternary
                      }
                      textColor={diasServicio.includes(value) ? 'secondary' : 'quaternary'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.button}>
              <Button
                title='Actualizar'
                color='primary'
                fontWeight='bold'
                onPress={
                  handleSubmit as (
                    values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined
                  ) => void
                }
              />
            </View>
          </View>
          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode='time'
            is24Hour={true}
            onConfirm={(t) => handleConfirm(t, setFieldValue)}
            onCancel={() => setTimePickerVisibility(false)}
            minuteInterval={10}
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.secondary
  },
  imagePreview: {
    width: 50,
    height: 50
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1
  },
  button: {
    marginTop: 40
  },
  text: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: theme.fontSize.title,
    fontWeight: 'bold'
  }
})

export default FormularioActulizarRestaurante
