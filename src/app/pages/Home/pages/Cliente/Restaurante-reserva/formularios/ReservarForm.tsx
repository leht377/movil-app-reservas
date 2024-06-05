import Button from '@/app/components/Button'
import FormikSelectInput from '@/app/components/FormikSelectInput'
import FormikTextInput from '@/app/components/FormikTextInput'
import { Formik } from 'formik'
import React from 'react'
import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'
interface MyFormValues {
  nombre_reservante: string
  hora_reserva: string
  cantidad_personas: number
}

const ReservaSchema = Yup.object().shape({
  nombre_reservante: Yup.string()
    .min(2, 'Nombre demasiado corto!')
    .max(50, 'Nombre demasiado largo!')
    .required('El nombre es requerido'),
  hora_reserva: Yup.string().required('La hora de reserva es requerida'),
  cantidad_personas: Yup.number()
    .min(1, 'Minimo una persona')
    .max(5, 'Maximo 5 personas')
    .required('Campo requerido')
})

const initialValues: MyFormValues = {
  cantidad_personas: 0,
  hora_reserva: '',
  nombre_reservante: ''
}

const cantidad_personas = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 }
]

const horas_del_dia = [
  { label: '12:00 AM', value: '00:00' },
  { label: '1:00 AM', value: '01:00' },
  { label: '2:00 AM', value: '02:00' },
  { label: '3:00 AM', value: '03:00' },
  { label: '4:00 AM', value: '04:00' },
  { label: '5:00 AM', value: '05:00' },
  { label: '6:00 AM', value: '06:00' },
  { label: '7:00 AM', value: '07:00' },
  { label: '8:00 AM', value: '08:00' },
  { label: '9:00 AM', value: '09:00' },
  { label: '10:00 AM', value: '10:00' },
  { label: '11:00 AM', value: '11:00' },
  { label: '12:00 PM', value: '12:00' },
  { label: '1:00 PM', value: '13:00' },
  { label: '2:00 PM', value: '14:00' },
  { label: '3:00 PM', value: '15:00' },
  { label: '4:00 PM', value: '16:00' },
  { label: '5:00 PM', value: '17:00' },
  { label: '6:00 PM', value: '18:00' },
  { label: '7:00 PM', value: '19:00' },
  { label: '8:00 PM', value: '20:00' },
  { label: '9:00 PM', value: '21:00' },
  { label: '10:00 PM', value: '22:00' },
  { label: '11:00 PM', value: '23:00' }
]
const ReservarForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservaSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        values,
        touched
      }) => (
        <View style={{ gap: 10, paddingBottom: 20 }}>
          <View style={{ gap: 10 }}>
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
                  data={horas_del_dia}
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
            </View>
          </View>
          <Button
            color='primary'
            buttonStyle={{ paddingVertical: 10 }}
            onPress={
              handleSubmit as (
                values:
                  | GestureResponderEvent
                  | React.FormEvent<HTMLFormElement>
                  | undefined
              ) => void
            }
            title='Solicitar reserva'
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})

export default ReservarForm
