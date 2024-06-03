import React, { useCallback, useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  View
} from 'react-native'

import { SearchBar } from '@rneui/themed'

import CardRestaurante from './components/CardRestaurante'
import useObtenerRestaurantes from './hooks/useObtenerRestaurantes'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'

// const restaurantes = [
//   {
//     id: '66311290bbc94fb1b508bf60',
//     usuario_id: '66311290bbc94fb1b508bf5c',
//     nombre: 'La Pulpería Criolla',
//     visible: false,
//     descripcion:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae earum dicta unde! Fuga excepturi beatae eaque porro quidem',
//     calificacion: 10,
//     cantidad_resenas: 2000,
//     locacion: 'Avenida Libertador',
//     horas_servicio: [],
//     dias_servicio: [],
//     url_foto_restaurante: [
//       'https://app-reservas-e9linvk2bxlahg9.s3.sa-east-1.amazonaws.com/Capturadepantalla2024-01-07134656.png'
//     ],
//     url_fotos_instalaciones: [],
//     fechas_bloqueadas_reservas: [],
//     calificacion_promedio: 2,
//     menu_id: '6632b024c300c1f31a94ea67',
//     rol: 'RESTAURANTE',
//     correo: 'pulperiacriolla@gmail.com'
//   },
//   {
//     id: '66311290bbc94fb1b508bf60q',
//     usuario_id: '66311290bbc94fb1b508bf5c',
//     nombre: 'La Pulpería Criolla',
//     visible: false,
//     descripcion:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae earum dicta unde! Fuga excepturi beatae eaque porro quidem',
//     calificacion: 10,
//     cantidad_resenas: 2000,
//     locacion: 'Avenida Libertador',
//     horas_servicio: [],
//     dias_servicio: [],
//     url_foto_restaurante: [
//       'https://app-reservas-e9linvk2bxlahg9.s3.sa-east-1.amazonaws.com/Capturadepantalla2024-01-07134656.png'
//     ],
//     url_fotos_instalaciones: [],
//     fechas_bloqueadas_reservas: [],
//     calificacion_promedio: 5,
//     menu_id: '6632b024c300c1f31a94ea67',
//     rol: 'RESTAURANTE',
//     correo: 'pulperiacriolla@gmail.com'
//   },
//   {
//     id: '66311290bbc94fb1b508bf60sa',
//     usuario_id: '66311290bbc94fb1b508bf5c',
//     nombre: 'La Pulpería Criolla',
//     visible: false,
//     descripcion:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae earum dicta unde! Fuga excepturi beatae eaque porro quidem',
//     calificacion: 10,
//     cantidad_resenas: 2000,
//     locacion: 'Avenida Libertador',
//     horas_servicio: [],
//     dias_servicio: [],
//     url_foto_restaurante: [
//       'https://app-reservas-e9linvk2bxlahg9.s3.sa-east-1.amazonaws.com/Capturadepantalla2024-01-07134656.png'
//     ],
//     url_fotos_instalaciones: [],
//     fechas_bloqueadas_reservas: [],
//     calificacion_promedio: 5,
//     menu_id: '6632b024c300c1f31a94ea67',
//     rol: 'RESTAURANTE',
//     correo: 'pulperiacriolla@gmail.com'
//   },
//   {
//     id: '66311290bbc94fb1b508bf60asd',
//     usuario_id: '66311290bbc94fb1b508bf5c',
//     nombre: 'La Pulpería Criolla',
//     visible: false,
//     descripcion:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae earum dicta unde! Fuga excepturi beatae eaque porro quidem',
//     calificacion: 10,
//     cantidad_resenas: 2000,
//     locacion: 'Avenida Libertador',
//     horas_servicio: [],
//     dias_servicio: [],
//     url_foto_restaurante: [
//       'https://app-reservas-e9linvk2bxlahg9.s3.sa-east-1.amazonaws.com/Capturadepantalla2024-01-07134656.png'
//     ],
//     url_fotos_instalaciones: [],
//     fechas_bloqueadas_reservas: [],
//     calificacion_promedio: 3.2,
//     menu_id: '6632b024c300c1f31a94ea67',
//     rol: 'RESTAURANTE',
//     correo: 'pulperiacriolla@gmail.com'
//   }
// ]
const RestauranteClientePage = () => {
  const { loading, obtenerRestaurantes, restaurantes } =
    useObtenerRestaurantes()

  const renderItem = useCallback(({ item }) => {
    return <CardRestaurante restaurante={item} />
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
        ListEmptyComponent={
          !loading && <StyledText>No hay restaurantes ...</StyledText>
        }
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
