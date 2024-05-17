import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, View } from 'react-native'
import theme from '../../../../../../common/theme'
import MyIcon from '../../../../../components/MyIcon'
import StyledText from '../../../../../components/StyledText'
import { RestauranteDetalladoEntity } from '../../../../../../dominio/entities'

interface Props {
  restaurante: RestauranteDetalladoEntity
}

const EstrellaVacia = () => {
  return <MyIcon nombre={'star-outline'} tamano={15} color={theme.colors.primary} />
}

const EstrellaMitad = () => {
  return <MyIcon nombre={'star-half'} tamano={15} color={theme.colors.primary} />
}

const EstrellaCompleta = () => {
  return <MyIcon nombre={'star'} tamano={15} color={theme.colors.primary} />
}
const RestauranteRecomendadoItem: React.FC<Props> = ({ restaurante }) => {
  const nombreRestaurante =
    restaurante.getNombre().length > 20
      ? restaurante.getNombre().slice(0, 20) + ' ...'
      : restaurante.getNombre()
  const calificacion = restaurante.getCalificacionPromedio()

  if (!restaurante) return null
  return (
    <View
      style={{
        width: 100,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          borderWidth: 4,
          borderColor: theme.colors.primary,
          padding: 2,
          borderRadius: 100
        }}
      >
        <Image
          width={65}
          height={65}
          style={{ borderRadius: 100 }}
          resizeMode='cover'
          source={{
            uri: 'https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg'
          }}
          accessibilityLabel='restaurante'
          accessible
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        {[1, 2, 3, 4, 5].map((e, index, array) => {
          if (calificacion >= e) return <EstrellaCompleta key={index} />
          else if (calificacion < e && calificacion > array[index - 1])
            return <EstrellaMitad key={index} />
          return <EstrellaVacia key={index} />
        })}
      </View>
      <StyledText fontWeight='bold' fontSize='body' align='center'>
        {nombreRestaurante}
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestauranteRecomendadoItem
