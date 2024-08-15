import Badge from '@/app/components/Badge'
import CalendarPicker from '@/app/components/CalendarPicker'
import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import { StyleSheet, View } from 'react-native'
import CardReserva from '../../components/CardReserva'
import { ScrollView } from 'react-native'
import { SearchBar, Skeleton } from '@rneui/themed'
import SelectInput from '@/app/components/SelectInput'
import { FlatList } from 'react-native'
import useObtenerReservasCliente from './hooks/useObtenerReservasCliente'
import LoadingScreen from '@/app/components/LoadingScreen'
import { RefreshControl } from 'react-native-gesture-handler'
import { EstadoReserva } from '@/common/utils/enums'
import SearchInput from '@/app/components/SearchInput'
import { ReservaEntity } from '@/dominio/entities'
import HeaderReservas from './components/HeaderReservas'
import FooterList from './components/FooterList'
import ListEmpty from './components/ListEmpty'
import ModalDecision from '@/app/components/ModalDesicion'
import ChefIcon from '@/app/icons/ChefIcon'
import ModalStatusCancelarReserva from './components/ModalStatusCancelarReserva'
import useCancelarReserva from './hooks/useCancelarReserva'

const RenderItem = ({ item, onPressCancelar }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CardReserva reserva={item} onPressCancelar={onPressCancelar} />
    </View>
  )
}

const ReservasCliente = () => {
  const { loading, obtenerReservas, reservas } = useObtenerReservasCliente()
  const [reservasFiltradas, setReservasFiltradas] = useState<ReservaEntity[]>()
  const [refreshing, setRefreshing] = useState(false)
  const [filtroEstadoReserva, setFiltroEstadoReserva] = useState<EstadoReserva | undefined>(
    EstadoReserva.PENDIENTE
  )

  const [modalDesicionVisible, setModalDesicionVisible] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [idRestauranteSeleccionado, setIdRestauranteSeleccionado] = useState<string>(undefined)
  const { cancelarReserva, statusCancelarReserva, errorCancelarReserva } = useCancelarReserva()

  useEffect(() => {
    obtenerReservas(filtroEstadoReserva)
  }, [filtroEstadoReserva])

  useEffect(() => {
    setReservasFiltradas(reservas)
  }, [reservas])

  const onRefresh = async () => {
    setRefreshing(true)
    await obtenerReservas(filtroEstadoReserva)
    setRefreshing(false)
  }

  const handleChangueInput = (text: string) => {
    setInputValue(text)
    const data = text
      ? reservas?.filter((r) =>
          r?.getNombreRestaurante()?.toLowerCase().includes(text?.toLowerCase())
        )
      : reservas
    setReservasFiltradas(data)
  }

  const handleSeleccionarEliminar = (id: string) => {
    setIdRestauranteSeleccionado(id)
    setModalDesicionVisible(true)
  }

  const handleAceptarCancelarReserva = async () => {
    if (!idRestauranteSeleccionado) return
    setModalDesicionVisible(false)
    const fueExitoso = await cancelarReserva(idRestauranteSeleccionado)
    if (fueExitoso) obtenerReservas(filtroEstadoReserva)
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={reservasFiltradas}
        ListEmptyComponent={<ListEmpty loading={loading} />}
        ListHeaderComponent={
          <HeaderReservas
            inputValue={inputValue}
            estadoReserva={filtroEstadoReserva}
            onChangeText={handleChangueInput}
            onChageEstadoReserva={setFiltroEstadoReserva}
          />
        }
        stickyHeaderIndices={[0]}
        renderItem={({ item }) => {
          if (loading) return <ListEmpty loading={loading} />
          return <RenderItem item={item} onPressCancelar={handleSeleccionarEliminar} />
        }}
        contentContainerStyle={{ gap: 10 }}
        ListFooterComponent={<FooterList loading={loading} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      <ModalDecision
        onAccept={handleAceptarCancelarReserva}
        onCancel={() => setModalDesicionVisible(false)}
        visible={modalDesicionVisible}
      >
        <View style={{ marginVertical: 20 }}>
          <StyledText fontWeight='bold' fontSize='title' align='center'>
            ¿Desea cancelar su reserva en este restaurante 🧑‍🍳?
          </StyledText>
        </View>
      </ModalDecision>
      <ModalStatusCancelarReserva
        status={statusCancelarReserva}
        error={errorCancelarReserva}
        onClose={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    flex: 1
  }
})

export default ReservasCliente
