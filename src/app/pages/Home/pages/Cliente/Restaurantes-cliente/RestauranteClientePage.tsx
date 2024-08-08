import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, ImageBackground, StyleSheet, View } from 'react-native'

import { SearchBar } from '@rneui/themed'

import CardRestaurante from './components/CardRestaurante'
import useObtenerRestaurantes from './hooks/useObtenerRestaurantes'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import useAgregarFavorito from './hooks/useAgregarFavorito'
import useEliminarFavorito from './hooks/useEliminarFavorito'
import { RefreshControl } from 'react-native-gesture-handler'
import { MODO } from '@/common/utils/enums/modo_obtener_datos'
import SearchInput from '@/app/components/SearchInput'
import Select from './components/Select'
import { useDebounce } from 'use-debounce'

const RestauranteClientePage = () => {
  const { loading, obtenerRestaurantes, restaurantes, paginacion } = useObtenerRestaurantes()
  const [refreshing, setRefreshing] = useState(false)
  const [search, setSearch] = useState('')
  const { agregarFavorito } = useAgregarFavorito()
  const { eliminarFavorito } = useEliminarFavorito()
  const [searchDebounce] = useDebounce(search, 300)

  useEffect(() => {
    ;(async () => {
      obtenerRestaurantes(MODO.REFRESCAR, searchDebounce)
    })()
  }, [searchDebounce])

  const handleAddFavorito = async (idRestaurante: string) => {
    await agregarFavorito(idRestaurante)
  }

  const handleDeleteFavorito = async (idRestaurante: string) => {
    await eliminarFavorito(idRestaurante)
  }

  const renderItem = ({ item }) => {
    return (
      <CardRestaurante
        restaurante={item}
        onAddFavorito={handleAddFavorito}
        onDeleteFavorito={handleDeleteFavorito}
      />
    )
  }

  const handleMoreData = () => {
    !loading && obtenerRestaurantes(MODO.MAS_DATA)
  }

  const renderFooter = () => {
    if (!loading) return null
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await obtenerRestaurantes()
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 10, gap: 10 }}>
        <SearchInput placeholder='Buscar restaurante ...' onChangeText={setSearch} value={search} />
        <View style={styles.containerFiltros}>
          <Select />
        </View>
      </View>

      <FlatList
        data={restaurantes}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item) => item?.getId()}
        ListEmptyComponent={!loading && <StyledText>No hay restaurantes ...</StyledText>}
        onEndReached={() => paginacion?.hasNextPage && handleMoreData()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: theme.colors.secondary
  },
  containerFiltros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5
  }
})

export default RestauranteClientePage
