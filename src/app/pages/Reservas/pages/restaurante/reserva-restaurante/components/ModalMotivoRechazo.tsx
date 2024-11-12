import Button from '@/app/components/Button'
import StyledText from '@/app/components/StyledText'
import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

interface ModalMotivoRechazoProps {
  visible: boolean
  onConfirm: (reason: string) => void
  onCancel: () => void
}

const ModalMotivoRechazo: React.FC<ModalMotivoRechazoProps> = ({
  visible,
  onConfirm,
  onCancel
}) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null)

  // Lista de motivos de rechazo
  const rejectionReasons = [
    'Capacidad Completa o Sobrecupo',
    'Reserva de Última Hora sin Disponibilidad',
    'Tamaño del Grupo Excede la Capacidad',
    'Horarios de Reserva Limitados',
    'Historial de No-shows o Cancelaciones Frecuentes',
    'Preferencia por Clientes Habituales o Miembros',
    'Evento Privado o Exclusivo',
    'Restricciones Dietéticas no Disponibles',
    'Requisitos de Edad o Código de Vestimenta',
    'Fechas Festivas con Políticas Especiales',
    'Falta de Depósito Requerido para Confirmación'
  ]

  // Función que se ejecuta al seleccionar un motivo
  const selectReason = (reason: string) => {
    setSelectedReason(reason)
  }

  // Confirmar la selección y llamar a la función onConfirm con el motivo seleccionado
  const handleConfirm = () => {
    if (selectedReason) {
      onConfirm(selectedReason)
    }
  }

  return (
    <Modal visible={visible} animationType='slide' transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecciona un motivo de rechazo</Text>

          <FlatList
            data={rejectionReasons}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.reasonItem, selectedReason === item && styles.selectedReasonItem]}
                onPress={() => selectReason(item)}
              >
                <StyledText style={styles.reasonText}>{item}</StyledText>
              </TouchableOpacity>
            )}
          />

          <View style={styles.buttonContainer}>
            <Button title='Cancelar' onPress={onCancel} color='tertiary' />
            <Button
              onPress={handleConfirm}
              disabled={!selectedReason}
              title='Aceptar'
              color='primary'
              textColor='white'
              
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '85%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: 500
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  reasonItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    alignItems: 'flex-start'
  },
  selectedReasonItem: {
    backgroundColor: '#e6e6e6'
  },
  reasonText: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%'
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  confirmButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ModalMotivoRechazo
