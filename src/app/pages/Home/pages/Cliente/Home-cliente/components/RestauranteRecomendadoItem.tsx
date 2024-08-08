import React from 'react'
import { Image, TouchableHighlightBase, TouchableNativeFeedback } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { RestauranteDetalladoEntity } from '../../../../../../../dominio/entities'
import theme from '../../../../../../../common/theme'
import Star from '../../../../../../components/Star'
import StyledText from '../../../../../../components/StyledText'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeStackParamList } from '@/app/routes/types/home.stack.paramlist'
import { useNavigation } from '@react-navigation/native'

interface Props {
  restaurante: RestauranteDetalladoEntity
}
const RestauranteRecomendadoItem: React.FC<Props> = ({ restaurante }) => {
  const nombreRestaurante =
    restaurante.getNombre().length > 20
      ? restaurante.getNombre().slice(0, 20) + ' ...'
      : restaurante.getNombre()
  const calificacion = restaurante.getCalificacionPromedio()
  const foto = restaurante?.getUrlFotoRestaurante()[0]
    ? restaurante?.getUrlFotoRestaurante()[0]
    : 'https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg'

  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>()
  const handleGotoRestauranteDetalle = () => {
    navigate('RestauranteDetalle', { restauranteId: restaurante.getId() })
  }
  if (!restaurante) return null

  return (
    <TouchableWithoutFeedback onPress={handleGotoRestauranteDetalle}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            width={65}
            height={65}
            style={styles.image}
            resizeMode='cover'
            source={{ uri: foto }}
            accessibilityLabel='restaurante'
            accessible
          />
        </View>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((e, index, array) => {
            if (calificacion >= e) return <Star type='completa' size={15} key={index} />
            else if (calificacion < e && calificacion > array[index - 1])
              return <Star type='mitad' size={15} key={index} />
            return <Star type='vacia' size={15} key={index} />
          })}
        </View>
        <StyledText fontWeight='bold' fontSize='body' align='center'>
          {nombreRestaurante}
        </StyledText>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imageContainer: {
    borderWidth: 4,
    borderColor: theme.colors.primary,
    padding: 2,
    borderRadius: 100
  },
  image: {
    borderRadius: 100
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5
  }
})
export default RestauranteRecomendadoItem
