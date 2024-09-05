import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import useObtenerRestaurantesFavoritos from './hooks/useObtenerRestaurantesFavoritos'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import SearchInput from '@/app/components/SearchInput'
import useAgregarFavorito from '../../Home/pages/Cliente/Restaurantes-cliente/hooks/useAgregarFavorito'
import useEliminarFavorito from '../../Home/pages/Cliente/Restaurantes-cliente/hooks/useEliminarFavorito'
import CardRestaurante from '../../Home/pages/Cliente/Restaurantes-cliente/components/CardRestaurante'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import { RestauranteDetalladoEntity } from '@/dominio/entities'

const FavoritosPages = () => {
  const { loading, obtenerRestaurantesFavoritos, restaurantes } = useObtenerRestaurantesFavoritos()
  const [restaurantesFiltrados, setRestaurantesFiltrados] = useState<RestauranteDetalladoEntity[]>()
  const [refreshing, setRefreshing] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')
  useEffect(() => {
    obtenerRestaurantesFavoritos()
  }, [])

  useEffect(() => {
    setRestaurantesFiltrados(restaurantes)
  }, [restaurantes])

  const { agregarFavorito } = useAgregarFavorito()
  const { eliminarFavorito } = useEliminarFavorito()

  const handleAddFavorito = async (idRestaurante: string) => {
    await agregarFavorito(idRestaurante)
  }

  const handleDeleteFavorito = async (idRestaurante: string) => {
    await eliminarFavorito(idRestaurante)
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await obtenerRestaurantesFavoritos()
    setRefreshing(false)
  }

  const renderItem = useCallback(({ item }) => {
    return (
      <CardRestaurante
        restaurante={item}
        onAddFavorito={handleAddFavorito}
        onDeleteFavorito={handleDeleteFavorito}
      />
    )
  }, [])

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  const handleChangueInput = (text: string) => {
    setInputValue(text)
    const data = text
      ? restaurantes?.filter((r) => r?.getNombre()?.toLowerCase().includes(text?.toLowerCase()))
      : restaurantes
    setRestaurantesFiltrados(data)
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <SearchInput
          placeholder='Buscar restaurante ...'
          onChangeText={handleChangueInput}
          value={inputValue}
        />
      </View>
      <FlatList
        data={restaurantesFiltrados}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        keyExtractor={(item) => item?.getId()}
        ListEmptyComponent={!loading && <StyledText>No hay restaurantes ...</StyledText>}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    gap: 20,
    backgroundColor: theme.colors.secondary
  }
})
// const styles = StyleSheet.create({})

export default FavoritosPages
