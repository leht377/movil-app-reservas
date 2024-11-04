import Button from '@/app/components/Button'
import CalendarPicker from '@/app/components/CalendarPicker'
import FormikSelectInput from '@/app/components/FormikSelectInput'
import FormikTextInput from '@/app/components/FormikTextInput'
import StyledText from '@/app/components/StyledText'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'
import MenuSelection from '../components/MenuSelection'
import useMenu from '../../hooks/useMenu'
import { PlatoEntity } from '@/dominio/entities'
interface MyFormValues {
  nombre_reservante: string
  hora_reserva: string
  cantidad_personas: number
  dia_reserva: string
  platos_ids_seleccionados: string[]
}

const ReservaSchema = Yup.object().shape({
  nombre_reservante: Yup.string()
    .min(6, 'Nombre demasiado corto!')
    .max(50, 'Nombre demasiado largo!')
    .required('El nombre es requerido'),
  hora_reserva: Yup.string().required('La hora de reserva es requerida'),
  platos_ids_seleccionados: Yup.array()
    .of(Yup.string().required('El ID del plato es requerido')) // Ensures each ID is a non-empty string
    .min(1, 'Debe seleccionar al menos un plato')
    .required('Debe seleccionar al menos un plato'),
  cantidad_personas: Yup.number()
    .min(1, 'Minimo una persona')
    .max(5, 'Maximo 5 personas')
    .required('Campo requerido'),
  dia_reserva: Yup.string().required('El dia es requerido')
})

const initialValues: MyFormValues = {
  cantidad_personas: 0,
  hora_reserva: '',
  nombre_reservante: '',
  dia_reserva: null,
  platos_ids_seleccionados: []
}

const cantidad_personas = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 }
]

interface Props {
  dataHoras: {
    label: string
    value: any
  }[]
  handleSubmit: (values: any) => any
}
const ReservarForm: React.FC<Props> = ({ dataHoras, handleSubmit }) => {
  const [isSubmit, setIsSubmit] = useState(false)
  const { platos } = useMenu()

  const handle = async (values, resetForm) => {
    setIsSubmit(true)
    const fueExitoso = await handleSubmit(values)
    if (fueExitoso) resetForm()
    setIsSubmit(false)
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservaSchema}
      onSubmit={(values, { resetForm }) => {
        handle(values, resetForm)
      }}
    >
      {({ handleChange, handleBlur, setFieldValue, handleSubmit, errors, values, touched }) => (
        <View style={{ gap: 10, paddingBottom: 20 }}>
          <View style={{ gap: 10 }}>
            <CalendarPicker onSelectDay={handleChange('dia_reserva')} />
            {errors.dia_reserva ? (
              <StyledText fontWeight='bold' fontSize='bodymini' color='primary'>
                *{errors.dia_reserva}
              </StyledText>
            ) : null}

            <View style={{ flex: 1 }}>
              <FormikTextInput
                name='nombre_reservante'
                placeholder='Nombre'
                label='Nombre del reservante'
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                gap: 5,
                flexWrap: 'wrap'
              }}
            >
              <View style={{ flex: 1, minWidth: 180 }}>
                <FormikSelectInput
                  name='hora_reserva'
                  data={dataHoras}
                  label='Hora de reserva'
                  placeholder='Seleccionar hora'
                />
              </View>
              <View style={{ flex: 1, minWidth: 180 }}>
                <FormikSelectInput
                  name='cantidad_personas'
                  data={cantidad_personas}
                  label='N° personas'
                  placeholder='Cantidad'
                />
              </View>
              <View style={{ flex: 1, minWidth: 180, height: 'auto', marginTop: 10 }}>
                <StyledText fontWeight='bold' fontSize='title'>
                  Seleccionar platos
                </StyledText>
                {errors.platos_ids_seleccionados ? (
                  <StyledText fontWeight='bold' fontSize='bodymini' color='primary'>
                    *{errors.platos_ids_seleccionados}
                  </StyledText>
                ) : null}

                {platos.length > 0 && (
                  <MenuSelection
                    onSelectedDishIds={(selectedIds) =>
                      setFieldValue('platos_ids_seleccionados', selectedIds)
                    }
                    dishes={platos}
                  />
                )}
              </View>
            </View>
          </View>
          <Button
            color='primary'
            buttonStyle={{ paddingVertical: 10 }}
            onPress={
              handleSubmit as (
                values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined
              ) => void
            }
            disabled={isSubmit}
            loading={isSubmit}
            title='Solicitar reserva'
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})

export default ReservarForm
