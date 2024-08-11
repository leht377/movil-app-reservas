import React from 'react'
import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import Modal from '../../../../../components/Modal'
import LoadingIcon from '../../../../../icons/Loading.icon'
import StyledText from '../../../../../components/StyledText'
import ErrorIcon from '../../../../../icons/Error.icon'
import ServerErrorIcon from '../../../../../icons/ServerError.icon'
import BadRequestIcon from '../../../../../icons/BadRequest.icon'

interface Props {
  isVisible: boolean
  onClose: (event: GestureResponderEvent) => void
  error: string
}

const ModalStatusRegistro: React.FC<Props> = ({ isVisible, onClose, error }) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          overflow: 'hidden',
          flexDirection: 'column'
        }}
      >
        <BadRequestIcon width={120} height={120} />
        <StyledText
          fontSize='title'
          style={{ flexShrink: 1 }}
          fontWeight='bold'
          color='quaternary'
          align='center'
        >
          {error}
        </StyledText>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})

export default ModalStatusRegistro
