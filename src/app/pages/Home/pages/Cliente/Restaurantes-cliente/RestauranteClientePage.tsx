import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, View } from 'react-native'

import { SearchBar } from '@rneui/themed'

import CardRestaurante from './components/CardRestaurante'
import useObtenerRestaurantes from './hooks/useObtenerRestaurantes'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import useAgregarFavorito from './hooks/useAgregarFavorito'
import useEliminarFavorito from './hooks/useEliminarFavorito'

const RestauranteClientePage = () => {
  const { loading, obtenerRestaurantes, restaurantes, cambiarRestaurantes } =
    useObtenerRestaurantes()
  const { agregarFavorito } = useAgregarFavorito()
  const { eliminarFavorito } = useEliminarFavorito()

  const handleAddFavorito = async (idRestaurante: string) => {
    await agregarFavorito(idRestaurante)
  }

  const handleDeleteFavorito = async (idRestaurante: string) => {
    await eliminarFavorito(idRestaurante)
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

  const handleMoreData = () => {
    !loading && obtenerRestaurantes()
  }

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SearchBar lightTheme placeholder='Buscar restaurante ...' />

      <FlatList
        data={restaurantes}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        keyExtractor={(item) => item?.getId()}
        ListEmptyComponent={!loading && <StyledText>No hay restaurantes ...</StyledText>}
        onEndReached={() => handleMoreData()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: theme.colors.secondary
  }
})

export default RestauranteClientePage
