import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import Button from '../../../../components/Button'
import StyledText from '../../../../components/StyledText'
import MyIcon from '../../../../components/MyIcon'
import theme from '../../../../../common/theme'
import GoogleIcon from '../../../../icons/Google.icon'
import PersonDoor from '../../../../icons/PersonDoor'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
// import { AppStackParamList } from '../../../../routes/types/app.stack.paramlist'
import { AutenticacionStackParamList } from '../../../../routes/types/autenticacion.stack.paramslist'

const OpcionesRegistroPage = () => {
  const { navigate } = useNavigation<StackNavigationProp<AutenticacionStackParamList>>()
  const registroCliente = () => {
    navigate('RegistroCliente')
  }
  const registroRestaurante = () => {
    navigate('RegistroRestaurante')
  }

  const login = () => {
    navigate('Login')
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
    >
      <View style={styles.containerIcon}>
        <PersonDoor />
      </View>
      <View style={styles.containerOpcionesIngreso}>
        <Button
          containerStyle={styles.containerButtonStyle}
          buttonStyle={styles.buttonStyle}
          color={'secondary'}
          onPress={login}
        >
          <MyIcon nombre={'mail'} tamano={25} color={theme.colors.quaternary} />
          <StyledText fontWeight='bold' color='quaternary'>
            Ingresar con correo
          </StyledText>
        </Button>
        {/* <Button
          containerStyle={styles.containerButtonStyle}
          buttonStyle={styles.buttonStyle}
          color={"secondary"}
        >
          <GoogleIcon height={25} width={25} />
          <StyledText fontWeight="bold" color="quaternary">
            Ingresar con Google
          </StyledText>
        </Button> */}
      </View>
      <View style={styles.containerSeparador}>
        <View style={styles.barra} />
        <StyledText color='tertiary' fontWeight='bold' fontSize='bodymini'>
          O
        </StyledText>
        <View style={styles.barra} />
      </View>
      <View style={styles.containerOpcionesIngreso}>
        <Button
          containerStyle={styles.containerButtonStyle}
          buttonStyle={styles.buttonStyle}
          color={'primary'}
          onPress={registroCliente}
        >
          <MyIcon nombre={'person'} tamano={25} color={theme.colors.secondary} />
          <StyledText fontWeight='bold' color='secondary' fontSize='body'>
            Registrarse como cliente
          </StyledText>
        </Button>
        <Button
          containerStyle={styles.containerButtonStyle}
          buttonStyle={styles.buttonStyle}
          color={'secondary'}
          onPress={registroRestaurante}
        >
          <MyIcon nombre={'restaurant'} tamano={25} color={theme.colors.quaternary} />
          <StyledText fontWeight='bold' color='quaternary'>
            Registrarse como restaurante
          </StyledText>
        </Button>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 20,
    justifyContent: 'center',
    gap: 20
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerOpcionesIngreso: {
    gap: 10
  },
  containerSeparador: {
    width: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  barra: {
    flex: 1,
    height: 2,
    backgroundColor: theme.colors.bgScreen
  },
  containerButtonStyle: {
    elevation: 2,
    borderRadius: 5
    // borderWidth: 1
  },

  buttonStyle: {
    justifyContent: 'flex-start',
    gap: 20,
    paddingVertical: 12
  }
})

export default OpcionesRegistroPage
