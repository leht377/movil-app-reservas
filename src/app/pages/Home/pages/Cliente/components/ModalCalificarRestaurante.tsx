import Button from '@/app/components/Button'
import Modal from '@/app/components/Modal'
import StartCalificacion from '@/app/components/StartCalificacion'
import StyledText from '@/app/components/StyledText'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

interface Props {
  visible: boolean
  handleClose: () => void
  onCalificar: (calificacion: number) => void
  loading?: boolean
}
const ModalCalificarRestaurante: React.FC<Props> = ({
  handleClose,
  onCalificar,
  visible,
  loading
}) => {
  const [calificacion, setCalificacion] = useState(0.5)
  const handleCalificar = (value: number) => {
    if (value < 0.5) return
    setCalificacion(value)
  }
  return (
    <Modal isVisible={visible} onClose={handleClose}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          paddingVertical: 20
        }}
      >
        <View>
          <StyledText
            style={{ fontSize: 39 }}
            fontSize='title'
            fontWeight='bold'
            color='primary'
            align='center'
          >
            {calificacion}
          </StyledText>
          <StartCalificacion
            calificacion={calificacion}
            starSize={50}
            onChange={(value) => handleCalificar(value)}
          />
        </View>
        <Button
          title='Calificar'
          color='primary'
          onPress={() => onCalificar(calificacion)}
          loading={loading}
          disabled={loading}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})

export default ModalCalificarRestaurante
