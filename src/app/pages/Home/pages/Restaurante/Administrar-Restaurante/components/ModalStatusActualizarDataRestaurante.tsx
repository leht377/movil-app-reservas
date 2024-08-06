import LoadingDots from '@/app/components/LoadingDots'
import Modal from '@/app/components/Modal'
import StyledText from '@/app/components/StyledText'
import BadRequestIcon from '@/app/icons/BadRequest.icon'
import ExitosoIcon from '@/app/icons/Exitoso.icon'
import LoadingIcon from '@/app/icons/Loading.icon'
import ReservaIcon from '@/app/icons/ReservaIcon'
import ServerErrorIcon from '@/app/icons/ServerError.icon'
import theme from '@/common/theme'
import Status from '@/common/utils/enums/status_asynctrunck'
import React from 'react'
import { ActivityIndicator, GestureResponderEvent, StyleSheet, View } from 'react-native'

interface Props {
  onClose: (event: GestureResponderEvent) => void
  error?: string
  status: Status
}

const ModalStatusActualizarDataRestaurante: React.FC<Props> = ({ onClose, status, error }) => {
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
          Actualizando restaurante
        </StyledText>
        <View style={{ marginVertical: 20 }}>
          <LoadingDots />
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          overflow: 'hidden',
          flexDirection: 'column'
        }}
      >
        <ExitosoIcon width={200} height={100} />
        <StyledText fontWeight='bold' fontSize='title' align='center'>
          Restaurante actualizado
        </StyledText>
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

export default ModalStatusActualizarDataRestaurante
