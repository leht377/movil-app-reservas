import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import LoginForm from './formularios/LoginForm'
import useLogin from './hooks/useLogin'
import PersonDoor from '@/app/icons/PersonDoor'

const Login = () => {
  const { autenticar, error } = useLogin()

  const onSubmit = async ({ email, contrasena }) => {
    await autenticar({ email, contrasena })
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <PersonDoor />
      </View>
      {error && (
        <StyledText fontWeight='bold' color='primary' align='center'>
          {error}
        </StyledText>
      )}
      <LoginForm onSubmit={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Login
