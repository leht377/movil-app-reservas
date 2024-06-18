import React from 'react'
import { Modal, View, TouchableOpacity, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import Button from './Button'

interface ModalDecisionProps {
  visible: boolean
  mensaje?: string
  children?: React.ReactNode
  onAccept: () => void
  onCancel: () => void
}

const ModalDecision: React.FC<ModalDecisionProps> = ({
  visible,
  onAccept,
  onCancel,
  mensaje,
  children
}) => {
  return (
    <Modal transparent={true} animationType='fade' visible={visible} onRequestClose={onCancel}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {children ? (
            children
          ) : (
            <StyledText style={styles.title}>{mensaje ? mensaje : '¿Deseas continuar?'}</StyledText>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title='Aceptar'
              color='primary'
              onPress={onAccept}
              containerStyle={styles.button}
            />
            <Button
              title='Cancelar'
              color='quaternary'
              onPress={onCancel}
              containerStyle={styles.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 5
  },
  buttonStyledText: {
    color: 'white',
    fontSize: 16
  }
})

export default ModalDecision
