import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import LoginForm from './formularios/LoginForm'
import useLogin from './hooks/useLogin'

const Login = () => {
  const { autenticar } = useLogin()

  const onSubmit = async ({ email, contrasena }) => {
    await autenticar({ email, contrasena })
  }

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',

    paddingHorizontal: 20
  }
})

export default Login
