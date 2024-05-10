import React from 'react'

import { Formik } from 'formik'
import { TextInput, View, StyleSheet, GestureResponderEvent } from 'react-native'
import Button from '../../../../../components/Button'
import StyledTextInput from '../../../../../components/StyledTextInput'
import * as Yup from 'yup'
import StyledText from '../../../../../components/StyledText'
import FormikTextInput from '../../../../../components/FormikTextInput'

interface MyFormValues {
  nombre: string
  apellido: string
  email: string
  constrasena: string
}
const RegistroClienteSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, 'Nombre demasiado corto!')
    .max(50, 'Nombre demasiado largo!')
    .required('El nombre es requerido'),
  apellido: Yup.string()
    .min(2, 'Apellido demasiado corto!')
    .max(50, 'Apellido demasiado largo!')
    .required('El apellido es requerido'),
  constrasena: Yup.string()
    .min(5, 'Contraseña demasiado corta!')
    .max(10, 'Contraseña demasiado larga!')
    .required('La contraseña es requerida'),
  email: Yup.string().email('Correo invalido').required('El correo es requerido')
})

const FormularioRegistroCliente = () => {
  const handleSubmitForm = (values) => {
    console.log(values)
  }
  const initialValues: MyFormValues = { apellido: '', email: '', nombre: '', constrasena: '' }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegistroClienteSchema}
      onSubmit={handleSubmitForm}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, values, touched }) => (
        <View style={{ gap: 20 }}>
          <FormikTextInput name='nombre' placeholder='Nombre' />
          <FormikTextInput name='apellido' placeholder='Apellido' />
          <FormikTextInput name='email' placeholder='Email' />
          <FormikTextInput name='constrasena' placeholder='Contraseña' keyboardType='password' />

          <Button
            color='primary'
            buttonStyle={{ paddingVertical: 10 }}
            onPress={
              handleSubmit as (
                values: GestureResponderEvent | React.FormEvent<HTMLFormElement> | undefined
              ) => void
            }
            title='Registrarse'
          />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({})

export default FormularioRegistroCliente
