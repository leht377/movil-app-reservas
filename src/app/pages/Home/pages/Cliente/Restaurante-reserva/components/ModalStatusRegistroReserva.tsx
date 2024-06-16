import Modal from '@/app/components/Modal'
import StyledText from '@/app/components/StyledText'
import BadRequestIcon from '@/app/icons/BadRequest.icon'
import LoadingIcon from '@/app/icons/Loading.icon'
import ReservaIcon from '@/app/icons/ReservaIcon'
import ServerErrorIcon from '@/app/icons/ServerError.icon'
import theme from '@/common/theme'
import Status from '@/common/utils/enums/status_asynctrunck'
import React from 'react'
import { ActivityIndicator, GestureResponderEvent, StyleSheet, View } from 'react-native'
import LoadingDots from 'react-native-loading-dots'

interface Props {
  onClose: (event: GestureResponderEvent) => void
  error?: string
  status: Status
}

const ModalStatusRegistroReserva: React.FC<Props> = ({ onClose, status, error }) => {
  const Loading = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          overflow: 'hidden',
          flexDirection: 'column'
        }}
      >
        <ReservaIcon width={100} height={100} />
        <StyledText
          fontSize='title'
          style={{ flexShrink: 1 }}
          fontWeight='bold'
          color='quaternary'
          align='center'
        >
          Registrando solicitud
        </StyledText>
        <View style={{ marginVertical: 20 }}>
          <LoadingDots
            size={18}
            colors={[
              theme.colors.primary,
              theme.colors.primary,
              theme.colors.primary,
              theme.colors.primary
            ]}
          />
        </View>
      </View>
    )
  }

  const Error = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          overflow: 'hidden',
          flexDirection: 'column'
        }}
      >
        <StyledText
          fontSize='title'
          style={{ flexShrink: 1 }}
          fontWeight='bold'
          color='quaternary'
          align='center'
        >
          🛑 Ha ocurrido un error 🛑
        </StyledText>
        <ServerErrorIcon width={100} height={100} />
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
    )
  }

  const Exitoso = () => {
    return (
      <View>
        <StyledText>Reserva solicitada exitosamente</StyledText>
      </View>
    )
  }

  let mensaje = Loading
  switch (status) {
    case Status.LOADING:
      mensaje = Loading
      break
    case Status.FAILED:
      mensaje = Error
      break
    case Status.SUCCEEDED:
      mensaje = Exitoso
      break
    default:
      break
  }
  if (status === Status.IDLE) return
  return (
    <Modal isVisible={true} onClose={onClose}>
      {mensaje()}
    </Modal>
  )
}

const styles = StyleSheet.create({})

export default ModalStatusRegistroReserva
