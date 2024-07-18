import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import FilterHastag from './FilterHastag/FilterHastag'
import CardPlato from '@/app/components/CardPlato'
import { menuServices } from '@/services/menu.services'
import { ObtenerMenuDto } from '@/dominio/dtos/obtener-menu.dto'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { MenuEntity, PlatoEntity } from '@/dominio/entities'

const MenuRestaurantes = () => {
  const [menu, setMenu] = useState<MenuEntity>(null)
  const [platos, setPlatos] = useState<PlatoEntity[]>([])

  const { restaurante_actual } = useAppSelector((state) => state.restaurante)
  const { usuario } = useAppSelector((state) => state.usuario)
  const onSelectFilters = (filters: string[]) => {
    console.log(filters)
  }
  const renderItem = ({ item }) => {
    return <CardPlato plato={item} />
  }
  console.log(restaurante_actual)
  const obtenerMenu = async () => {
    try {
      const dto = ObtenerMenuDto.crear({
        menu_id: restaurante_actual?.getMenuId()
      })
      const menu = await menuServices.obtenerMenu(dto)
      setMenu(menu)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    obtenerMenu()
  }, [])

  useEffect(() => {
    if (menu) setPlatos(menu.getPlatos())
  }, [menu])

  return (
    <View style={styles.container}>
      <FilterHastag onSelectFilters={onSelectFilters} />

      {/* CARD MENU */}
      {platos.length > 0 ? (
        <FlatList
          data={platos}
          renderItem={renderItem}
          nestedScrollEnabled
          keyExtractor={(item: PlatoEntity) => item?.getId()}
          ListFooterComponent={<View style={{ height: 20 }} />}
        />
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    gap: 10
  }
})

export default MenuRestaurantes
