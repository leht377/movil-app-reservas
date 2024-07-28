import React, { useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, FlatList } from 'react-native'

import RestauranteRecomendadoItem from './RestauranteRecomendadoItem'
import useObtenerTopRestaurantes from '../hooks/useObtenerTopRestaurantes'

import StyledText from '../../../../../../components/StyledText'
import { RestauranteDetalladoEntity, RestauranteEntity } from '@/dominio/entities'

// const restaurantes = [
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'Carnivoros@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631124bbbc94fb1b508bf1e',
//     locacion: 'calle 5 sur',
//     menu_id: undefined,
//     nombre: 'Carnivoros',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631124abbc94fb1b508bf1a',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'fogonarrieros@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311250bbc94fb1b508bf24',
//     locacion: 'Avenida del Rosal',
//     menu_id: undefined,
//     nombre: 'El Fogón de los Arrieros',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311250bbc94fb1b508bf20',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'parrillagaucho@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311256bbc94fb1b508bf2a',
//     locacion: 'Calle Argentina',
//     menu_id: undefined,
//     nombre: 'La Parrilla del Gaucho',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311255bbc94fb1b508bf26',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'asadorpatagonico@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631125cbbc94fb1b508bf30',
//     locacion: 'Avenida San Martín',
//     menu_id: undefined,
//     nombre: 'Asador Patagónico',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631125cbbc94fb1b508bf2c',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'pampagrill@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311262bbc94fb1b508bf36',
//     locacion: 'Calle Moreno',
//     menu_id: undefined,
//     nombre: 'Pampa Grill',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311262bbc94fb1b508bf32',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'estanciaargentina@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631126cbbc94fb1b508bf3c',
//     locacion: 'Avenida Belgrano',
//     menu_id: undefined,
//     nombre: 'La Estancia Argentina',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631126cbbc94fb1b508bf38',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'gauchossteakhouse@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311273bbc94fb1b508bf42',
//     locacion: 'Calle Rivadavia',
//     menu_id: undefined,
//     nombre: 'Los Gauchos Steakhouse',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311273bbc94fb1b508bf3e',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'donjulioparrilla@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631127abbc94fb1b508bf48',
//     locacion: 'Avenida Corrientes',
//     menu_id: undefined,
//     nombre: 'Don Julio Parrilla',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631127abbc94fb1b508bf44',
//     visible: false
//   },
//   {
//     calificacion: 5,
//     calificacion_promedio: 5,
//     cantidad_resenas: 1,
//     correo: 'almacenmilanesas@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311281bbc94fb1b508bf4e',
//     locacion: 'Calle Uruguay',
//     menu_id: undefined,
//     nombre: 'El Almacén de los Milanesas',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311281bbc94fb1b508bf4a',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'esquinaempanada@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311286bbc94fb1b508bf54',
//     locacion: 'Avenida Brasil',
//     menu_id: undefined,
//     nombre: 'La Esquina de la Empanada',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311286bbc94fb1b508bf50',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'parrillasur@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631128bbbc94fb1b508bf5a',
//     locacion: 'Calle Italia',
//     menu_id: undefined,
//     nombre: 'Parrilla del Sur',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631128bbbc94fb1b508bf56',
//     visible: false
//   },
//   {
//     calificacion: 10,
//     calificacion_promedio: 5,
//     cantidad_resenas: 2,
//     correo: 'pulperiacriolla@gmail.com',
//     descripcion: 'chomooooooooos',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311290bbc94fb1b508bf60',
//     locacion: 'Avenida Libertador',
//     menu_id: '6632b024c300c1f31a94ea67',
//     nombre: 'La Pulpería Criolla',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311290bbc94fb1b508bf5c',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'tenedorargentino@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '66311298bbc94fb1b508bf66',
//     locacion: 'Calle España',
//     menu_id: undefined,
//     nombre: 'Tenedor Argentino',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '66311297bbc94fb1b508bf62',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'casaempanadas@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '6631129fbbc94fb1b508bf6c',
//     locacion: 'Avenida Chile',
//     menu_id: undefined,
//     nombre: 'Casa de las Empanadas',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '6631129fbbc94fb1b508bf68',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'ranchoargentino@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112a4bbc94fb1b508bf72',
//     locacion: 'Calle Paraguay',
//     menu_id: undefined,
//     nombre: 'El Rancho Argentino',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112a4bbc94fb1b508bf6e',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'bodegoncriollo@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112adbbc94fb1b508bf78',
//     locacion: 'Avenida Venezuela',
//     menu_id: undefined,
//     nombre: 'El Bodegón Criollo',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112adbbc94fb1b508bf74',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'cantinasur@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112b4bbc94fb1b508bf7e',
//     locacion: 'Calle Bolivia',
//     menu_id: undefined,
//     nombre: 'Cantina del Sur',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112b4bbc94fb1b508bf7a',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'chacradasador@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112bbbbc94fb1b508bf84',
//     locacion: 'Avenida Colombia',
//     menu_id: undefined,
//     nombre: 'La Chacra del Asador',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112bbbbc94fb1b508bf80',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'pampabrava@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112bfbbc94fb1b508bf8a',
//     locacion: 'Calle Ecuador',
//     menu_id: undefined,
//     nombre: 'La Pampa Brava',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112bfbbc94fb1b508bf86',
//     visible: false
//   },
//   {
//     calificacion: 0,
//     calificacion_promedio: 0,
//     cantidad_resenas: 0,
//     correo: 'fogoncriollo@gmail.com',
//     descripcion: '',
//     dias_servicio: [],
//     fechas_bloqueadas_reservas: [],
//     horas_servicio: [],
//     id: '663112c4bbc94fb1b508bf90',
//     locacion: 'Avenida Perú',
//     menu_id: undefined,
//     nombre: 'El Fogón Criollo',
//     rol: 'RESTAURANTE',
//     url_foto_restaurante: undefined,
//     url_fotos_instalaciones: undefined,
//     usuario_id: '663112c4bbc94fb1b508bf8c',
//     visible: false
//   }
// ]

const RestaurantesRecomendadosSection = () => {
  const { cargando, obtenerTopRestaurantes, restaurantes } =
    useObtenerTopRestaurantes()

  const getData = async () => {
    await obtenerTopRestaurantes()
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <StyledText fontWeight='bold' fontSize='title'>
          Recomendados
        </StyledText>
        <StyledText fontSize='bodymini'>
          Restaurantes mejores calificados
        </StyledText>
      </View>

      <FlatList
        data={restaurantes}
        horizontal={true}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <RestauranteRecomendadoItem key={item.getId()} restaurante={item as RestauranteDetalladoEntity} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  }
})

export default RestaurantesRecomendadosSection
