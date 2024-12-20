import Button from '@/app/components/Button'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import CardReservaPendiente from './components/CardReservaPendiente'
import SearchInput from '@/app/components/SearchInput'
import useObtenerReservaRestaurante from './hooks/useObtenerReservaRestaurante'
import { ReservaEntity } from '@/dominio/entities'
import { EstadoReserva } from '@/common/utils/enums'
import ListEmpty from '@/app/pages/Reservas/pages/cliente/reservas-cliente/components/ListEmpty'
import { RefreshControl } from 'react-native-gesture-handler'
import useAceptarReservaRestaurante from './hooks/useAceptarReservaRestaurante'
import ModalStatusAceptarReserva from './components/ModalStatusAceptarReserva'
import useRechazarReservaRestaurante from './hooks/useRechazarReservaRestaurante'
import ModalDecision from '@/app/components/ModalDesicion'
import ModalMotivoRechazo from './components/ModalMotivoRechazo'
import useCancelarReservaRestaurante from './hooks/useCancelarReservaRestuarante'
import ModalStatusCancelarReserva from './components/ModalStatusCancelarReserva'

const AdministrarReserva = () => {
  const { loading, obtenerReservas, reservas } = useObtenerReservaRestaurante()
  const [reservasFiltradas, setReservasFiltradas] = useState<ReservaEntity[]>([])

  const [refreshing, setRefreshing] = useState(false)
  const [filtroEstadoReserva, setFiltroEstadoReserva] = useState<EstadoReserva>(
    EstadoReserva.PENDIENTE
  )
  const [modalDesicionVisible, setModalDesicionVisible] = useState<boolean>(false)
  const [modalCancelarReserva, setModalCancelarReserva] = useState<boolean>(false)
  const [idReservaSeleccionada, setIdReservaSeleccionada] = useState<string | undefined>(undefined)
  const { aceptarReserva, statusAceptarReserva, errorAceptarReserva } =
    useAceptarReservaRestaurante()
  const { rechazarReserva, statusRechazarReserva, errorRechazarReserva } =
    useRechazarReservaRestaurante()
  const [inputValue, setInputValue] = useState<string>('')
  const { cancelarReserva, errorCancelarReserva, statusCancelarReserva } =
    useCancelarReservaRestaurante()
  const filterReservas = () => {
    if (!reservas) return []
    return reservas.filter((r) => r.getEstado() === filtroEstadoReserva)
  }

  useEffect(() => {
    setReservasFiltradas(filterReservas())
  }, [filtroEstadoReserva, reservas])

  useEffect(() => {
    obtenerReservas(filtroEstadoReserva)
  }, [filtroEstadoReserva])

  const onRefresh = async () => {
    setRefreshing(true)
    await obtenerReservas(filtroEstadoReserva)
    setRefreshing(false)
  }

  const handleAceptarReserva = async (idReserva: string) => {
    const reserva = await aceptarReserva(idReserva)
    if (reserva) {
      await onRefresh()
    }
  }

  const handleRechazarReserva = async (idReserva: string) => {
    setIdReservaSeleccionada(idReserva)
    setModalDesicionVisible(true)
  }

  const handleConfirmarRechazo = async (motivo: string) => {
    if (idReservaSeleccionada) {
      await rechazarReserva(idReservaSeleccionada, motivo)
      setModalDesicionVisible(false)
      await onRefresh()
    }
  }

  const handleConfirmarCancelacion = async (motivo: string) => {
    const reserva = reservas?.find((r) => r.getId() === idReservaSeleccionada)
    if (idReservaSeleccionada && reserva) {
      const cliente_id = reserva?.getClienteId()
      await cancelarReserva(idReservaSeleccionada, motivo, cliente_id)
      setModalCancelarReserva(false)
      await onRefresh()
    }
  }

  const handleCancelarReserva = async (idReserva: string) => {
    setIdReservaSeleccionada(idReserva)
    setModalCancelarReserva(true)
  }

  const handleCancelarRechazo = () => {
    setModalDesicionVisible(false)
  }

  const handleChangueInput = (text: string) => {
    setInputValue(text)
    const data = text
      ? reservas?.filter(
          (r) =>
            r?.getNombreCliente()?.toLowerCase().includes(text?.toLowerCase()) ||
            r?.getCodIngreso()?.toLowerCase().includes(text?.toLowerCase())
        )
      : reservas
    setReservasFiltradas(data)
  }

  const today = new Date()
  const day = today.toLocaleString('es-ES', { weekday: 'long' })
  const date = today.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long'
  })

  return (
    <View style={styles.container}>
      <View style={styles.containerFecha}>
        <View style={styles.Fecha}>
          <StyledText fontWeight='bold' fontSize='title'>
            Día
          </StyledText>
          <StyledText fontWeight='bold' fontSize='title'>
            {day} {date}
          </StyledText>
        </View>
      </View>
      <View style={styles.searchInput}>
        <SearchInput
          placeholder='Nombre del titular de la reserva o código'
          value={inputValue}
          onChangeText={handleChangueInput}
        />
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.buttonContainer}>
              {[
                { label: 'Pendientes', estado: EstadoReserva.PENDIENTE },
                { label: 'Aceptadas', estado: EstadoReserva.ACEPTADA },
                { label: 'Rechazadas', estado: EstadoReserva.RECHAZADA },
                { label: 'Cancelada', estado: EstadoReserva.CANCELADA }
              ].map(({ label, estado }) => (
                <TouchableOpacity
                  key={label}
                  style={[styles.button, filtroEstadoReserva === estado && styles.buttonSelected]}
                  onPress={() => setFiltroEstadoReserva(estado)}
                >
                  <StyledText
                    color={filtroEstadoReserva === estado ? 'secondary' : 'quaternary'}
                    fontWeight='bold'
                  >
                    {label}
                  </StyledText>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
        data={reservasFiltradas}
        renderItem={({ item }) =>
          loading ? (
            <ListEmpty loading={loading} />
          ) : (
            <CardReservaPendiente
              reserva={item}
              onPressAceptar={handleAceptarReserva}
              onPressRechazar={handleRechazarReserva}
              onPressCancelar={handleCancelarReserva}
            />
          )
        }
        ListEmptyComponent={<ListEmpty loading={loading} />}
        ListFooterComponent={<View style={{ height: 20 }} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <ModalStatusAceptarReserva
        status={statusAceptarReserva}
        error={errorAceptarReserva}
        onClose={() => {}}
        texto=' Aceptando reserva'
        texto1='Reserva Aceptada exitosamente'
      />

      {/* <ModalDecision
        onAccept={handleConfirmarRechazo}
        onCancel={handleCancelarRechazo}
        visible={modalDesicionVisible}
      >
        <View style={{ marginVertical: 20 }}>
          <StyledText fontWeight='bold' fontSize='title' align='center'>
            ¿Desea rechazar esta reserva?
          </StyledText>
        </View>
      </ModalDecision> */}
      <ModalStatusCancelarReserva
        status={statusCancelarReserva}
        error={errorCancelarReserva}
        onClose={() => {}}
      />
      <ModalMotivoRechazo
        visible={modalDesicionVisible}
        onCancel={handleCancelarRechazo}
        onConfirm={handleConfirmarRechazo}
      />
      <ModalMotivoRechazo
        visible={modalCancelarReserva}
        onCancel={() => setModalCancelarReserva(false)}
        onConfirm={handleConfirmarCancelacion}
      />
      <ModalStatusAceptarReserva
        status={statusRechazarReserva}
        error={errorRechazarReserva}
        onClose={() => {}}
        texto='Rechazando reserva'
        texto1='Reserva rechazada exitosamente'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  },
  ContenedorImagen: {
    borderRadius: 2.5,
    borderWidth: 0.4,
    borderColor: theme.colors.quaternary,
    overflow: 'hidden',
    height: '30%',
    margin: 10
  },
  image: {
    flex: 1
  },
  containerFecha: {
    flexDirection: 'row',
    gap: 20,
    marginHorizontal: 20,

    marginBottom: 20
  },
  Fecha: {},
  buton: {
    paddingTop: 10,
    height: '100%',
    width: '50%',
    marginLeft: 50
  },
  searchInput: {
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    gap: 6,
    flexWrap: 'wrap'
  },
  button: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent'
  },
  buttonSelected: {
    backgroundColor: theme.colors.primary
  }
})

export default AdministrarReserva
