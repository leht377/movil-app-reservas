import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import StyledText from '../../../../components/StyledText'
import FormularioRegistroCliente from './formularios/FormularioRegistroCliente'
import theme from '../../../../../common/theme'
import Button from '../../../../components/Button'
import GoogleIcon from '../../../../icons/Google.icon'
import PersonFile from '../../../../icons/PersonFile'
import { ScrollView } from 'react-native'
import Modal from '../../../../components/Modal'
import ModalStatusRegistro from './components/ModalStatusRegistro'
import useRegistrarCliente from './hooks/useRegistrarCliente'
import Status from '@/common/utils/enums/status_asynctrunck'

const RegistroCliente = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { registrar, error, loading, status } = useRegistrarCliente()

  useEffect(() => {
    if (status === Status.FAILED) setModalVisible(true)
    else setModalVisible(false)
  }, [status])
  return (
    <KeyboardAvoidingView
      style={styles.topContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <PersonFile />
          </View>
          <FormularioRegistroCliente onSubmit={registrar} loading={loading} />
          <View style={styles.containerPoliticas}>
            <StyledText fontSize='bodymini' align='center'>
              Al continuar, aceptas las{' '}
              <StyledText fontSize='bodymini' color='primary'>
                Condiciones de Servicio
              </StyledText>{' '}
              y
              <StyledText fontSize='bodymini' color='primary'>
                {' '}
                la Política de Privacidad
              </StyledText>
            </StyledText>
          </View>
          <View>
            <Button
              containerStyle={styles.containerButtonStyle}
              buttonStyle={styles.buttonStyle}
              color={'secondary'}
              onPress={() => setModalVisible(true)}
            >
              <GoogleIcon height={25} width={25} />
              <StyledText fontWeight='bold' color='quaternary'>
                Registrarse con Google
              </StyledText>
            </Button>
          </View>
        </View>
      </ScrollView>
      <ModalStatusRegistro
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        error={error}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  },
  container: {
    gap: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 5
  },
  containerPoliticas: {},
  containerButtonStyle: {
    elevation: 1,
    borderWidth: 1,
    borderRadius: 5
  },

  buttonStyle: {
    justifyContent: 'flex-start',
    gap: 20,
    paddingVertical: 12
  }
})

export default RegistroCliente
