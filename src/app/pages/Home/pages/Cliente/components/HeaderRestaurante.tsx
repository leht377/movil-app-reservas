import Badge from '@/app/components/Badge'
import MyIcon from '@/app/components/MyIcon'
import StartCalificacion from '@/app/components/StartCalificacion'
import StyledText from '@/app/components/StyledText'
import { agruparHorasServicio } from '@/common/helpers/agruparHorasServicio'
import { agruparDiasDeServicio } from '@/common/helpers/ordenarDiasDeServicio'
import theme from '@/common/theme'
import { RestauranteDetalladoEntity, RestauranteEntity } from '@/dominio/entities'
import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ModalCalificarRestaurante from './ModalCalificarRestaurante'
import useCalificarRestaurante from '../hooks/useCalificarRestaurante'
import Button from '@/app/components/Button'
import useHayUsuarioLogeado from '@/app/hooks/useHayUsuarioLogeado'
import ModalStatusCalificarRestaurante from './ModalStatusCalificarRestaurante'

interface Props {
  restaurante: RestauranteDetalladoEntity
}
const HeaderRestaurante: React.FC<Props> = ({ restaurante }) => {
  const [visible, setVisible] = useState(false)
  const { calificarRestauranteCliente, cargando, status } = useCalificarRestaurante()
  const usuarioLogeado = useHayUsuarioLogeado()
  const foto =
    // restaurante?.getUrlFotoRestaurante()[0] ||
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEDbEHQNBO6uY1dwIHIUprr5PatZJJdLubNdtMXxROQ&s'

  let dias_servicio_agrupados = agruparDiasDeServicio(restaurante?.getDiasServicio() ?? [])
  let dias_servicio = dias_servicio_agrupados
    .map((d) => {
      if (d.length > 1) return `${d[0]?.slice(0, 3)}/${d[d.length - 1]?.slice(0, 3)}`
      return `${d[0]?.slice(0, 3)}`
    })
    .join(' - ')
  let horas_servicio_agrupadas_12h = agruparHorasServicio(restaurante?.getHorasServicio())

  const handleCalificarRestaurante = async (calificacion: number) => {
    setVisible(false)
    await calificarRestauranteCliente(restaurante?.getId(), calificacion)
  }

  return (
    <View>
      <View style={styles.headerRestaurante}>
        <View style={styles.containerText}>
          <StyledText color='secondary' fontWeight='bold' style={{ fontSize: 40 }}>
            {restaurante?.getNombre()}
          </StyledText>
        </View>
        <ImageBackground
          source={{
            uri: foto
          }}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          resizeMode='cover'
        />
      </View>
      <View style={styles.containerInformacionBasica}>
        <View style={styles.containerDescripcion}>
          <StyledText align='justify'>{restaurante?.getDescripcion()}</StyledText>
        </View>
        <View style={styles.containerCalificacion}>
          <View style={styles.containerResenas}>
            <StartCalificacion
              calificacion={restaurante?.getCalificacionPromedio()}
              starSize={28}
              disable
            />
            <StyledText fontSize='body' fontWeight='bold'>
              {restaurante?.getCantidadResenas()?.toLocaleString('en')} Reseñas
            </StyledText>
          </View>
          {usuarioLogeado && (
            <Button
              title='Calificar'
              onPress={() => setVisible(true)}
              color='green'
              containerStyle={{ alignSelf: 'flex-start' }}
            />
          )}
        </View>
        <View style={styles.containerLocation}>
          <MyIcon nombre={'location'} tamano={25} />
          <StyledText fontWeight='bold'>{restaurante?.getLocacion()}</StyledText>
        </View>
        <View style={styles.containerDisponibilidad}>
          {horas_servicio_agrupadas_12h?.map((horas) => {
            return (
              <Badge
                key={horas.toString()}
                text={
                  horas?.length > 1 ? `${horas[0]} - ${horas[horas.length - 1]}` : `${horas[0]}`
                }
                icon='time'
              />
            )
          })}
          {/* <Badge text={horas_servicio} icon='time' /> */}
          <Badge text={dias_servicio} icon='today' />
          {/* {dias_servicio_agrupados?.map((dias) => {
            return (
              <Badge
                key={dias.toString()}
                text={dias?.length > 1 ? `${dias[0]} - ${dias[dias.length - 1]}` : `${dias[0]}`}
                icon='today'
              />
            )
          })} */}
        </View>
      </View>
      <ModalCalificarRestaurante
        visible={visible}
        handleClose={() => setVisible(false)}
        onCalificar={handleCalificarRestaurante}
        loading={cargando}
      />
      <ModalStatusCalificarRestaurante onClose={() => {}} status={status} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  },
  containerInformacionBasica: {
    gap: 10,
    marginBottom: 10
  },
  containerButton: {
    paddingHorizontal: 20
  },

  headerRestaurante: {
    position: 'relative',
    height: 250,
    marginBottom: 20
  },
  containerDescripcion: {
    paddingHorizontal: 20
  },
  containerCalificacion: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  containerResenas: {
    flexDirection: 'row',

    gap: 10,
    alignItems: 'center'
  },
  containerLocation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  containerDisponibilidad: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
  imageStyle: { opacity: 0.7 },
  containerText: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 2,
    gap: 20,
    paddingHorizontal: 20
  },
  tab: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 100,
    margin: 2,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    width: 'auto'
  }
})

export default HeaderRestaurante
