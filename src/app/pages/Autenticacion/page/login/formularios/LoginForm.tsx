import React, { useState } from 'react'
import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import FormikTextInput from '@/app/components/FormikTextInput'
import Button from '@/app/components/Button'
interface MyFormValues {
  email: string
  contrasena: string
}
const RegistroClienteSchema = Yup.object().shape({
  contrasena: Yup.string()
    .required('La contraseña es requerida')
    .min(5, 'Contraseña demasiado corta!')
    .max(10, 'Contraseña demasiado larga!'),

  email: Yup.string()
    .email('Correo invalido')
    .required('El correo es requerido')
})

interface Props {
  onSubmit: ({ email, contrasena }) => void
  isDisable?: boolean
}
const LoginForm: React.FC<Props> = ({ onSubmit, isDisable }) => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const handleSubmitForm = async ({ email, contrasena }) => {
    try {
      setIsSubmit(true)
      await onSubmit({ email, contrasena })
    } catch (error) {
    } finally {
      setIsSubmit(false)
    }
  }
  const initialValues: MyFormValues = { email: '', contrasena: '' }

  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={RegistroClienteSchema}
        onSubmit={handleSubmitForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched
        }) => (
          <View style={{ gap: 10 }}>
            <FormikTextInput name='email' placeholder='Correo' />
            <FormikTextInput
              name='contrasena'
              placeholder='Contraseña'
              keyboardType='password'
            />
            <Button
              color='primary'
              buttonStyle={{ paddingVertical: 10 }}
              disabled={isDisable || isSubmit}
              loading={isSubmit}
              onPress={
                handleSubmit as (
                  values:
                    | GestureResponderEvent
                    | React.FormEvent<HTMLFormElement>
                    | undefined
                ) => void
              }
              title='Ingresar'
            />
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({})

export default LoginForm
