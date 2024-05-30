import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import StyledText from '../../../../../components/StyledText'
import Star from '../../../../../components/Star'
import theme from '../../../../../../common/theme'
import MyIcon from '../../../../../components/MyIcon'
import Button from '../../../../../components/Button'
import { RestauranteDetalladoEntity } from '../../../../../../dominio/entities'

interface Props {
  restaurante: RestauranteDetalladoEntity
}
const CardRestaurante: React.FC<Props> = ({ restaurante }) => {
  const calificacion = restaurante?.getCalificacionPromedio()

  if (!restaurante) return null
  return (
    <View style={styles.card}>
      <StyledText fontSize='title' fontWeight='bold' style={styles.title}>
        {restaurante?.getNombre()}
      </StyledText>
      <View>
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEDbEHQNBO6uY1dwIHIUprr5PatZJJdLubNdtMXxROQ&s'
          }}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((e, index) => {
              let tipo_estrella
              if (calificacion >= e) tipo_estrella = 'completa'
              else if (calificacion > e - 1 && calificacion < e) tipo_estrella = 'mitad'
              else tipo_estrella = 'vacia'
              return <Star type={tipo_estrella} size={24} key={index} />
            })}
          </View>
          <StyledText fontSize='body' fontWeight='bold'>
            {restaurante?.getCantidadResenas()?.toLocaleString('en')} Reseñas
          </StyledText>
        </View>
        <View>
          <StyledText>{restaurante?.getDescripcion()}</StyledText>
        </View>
        <View style={styles.locationContainer}>
          <MyIcon nombre={'location'} tamano={20} />
          <StyledText fontWeight='bold' fontSize='title'>
            {restaurante?.getLocacion()}
          </StyledText>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='Reservar'
            color='primary'
            fontWeight='bold'
            containerStyle={styles.button}
          />
          <Button
            title='Ver menú'
            color='primary'
            fontWeight='bold'
            containerStyle={styles.button}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondary,
    gap: 1,
    elevation: 2,
    borderRadius: 5
  },
  title: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 170
  },
  infoContainer: {
    gap: 8,
    padding: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  starsContainer: {
    flexDirection: 'row'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10
  },
  button: {
    width: 150
  }
})

export default CardRestaurante