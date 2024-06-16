import Modal from '@/app/components/Modal'
import StyledText from '@/app/components/StyledText'
import BadRequestIcon from '@/app/icons/BadRequest.icon'
import LoadingIcon from '@/app/icons/Loading.icon'
import ReservaIcon from '@/app/icons/ReservaIcon'
import theme from '@/common/theme'
import React from 'react'
import { ActivityIndicator, GestureResponderEvent, StyleSheet, View } from 'react-native'

interface Props {
  isVisible: boolean
  onClose: (event: GestureResponderEvent) => void
  error?: string
}

const ModalStatusRegistroReserva: React.FC<Props> = ({ isVisible, onClose, error }) => {
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
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <ReservaIcon width={100} height={100} />
          <ActivityIndicator size='large' color={theme.colors.primary} />
        </View>
        <StyledText
          fontSize='title'
          style={{ flexShrink: 1 }}
          fontWeight='bold'
          color='quaternary'
          align='center'
        >
          Estamos registrando tu solicitud...
        </StyledText>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})

export default ModalStatusRegistroReserva
