import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import StyledText from '@/app/components/StyledText'
import MyIcon from '@/app/components/MyIcon'
import Button from '@/app/components/Button'
import { HomeStackParamList } from '@/app/routes/types/home.stack.paramlist'
import { RestauranteDetalladoEntity } from '@/dominio/entities'
import theme from '@/common/theme'
import StartCalificacion from '@/app/components/StartCalificacion'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import BotonFavorito from './BotonFavorito'

interface Props {
  restaurante: RestauranteDetalladoEntity
  onAddFavorito: (idRestaurante: string) => Promise<void>
  onDeleteFavorito: (idRestaurante: string) => Promise<void>
}
const CardRestaurante: React.FC<Props> = ({ restaurante, onAddFavorito, onDeleteFavorito }) => {
  const calificacion = restaurante?.getCalificacionPromedio()
  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>()
  const { cliente } = useAppSelector((state) => state.cliente)
  const estaEnFavorito = cliente?.getRestaurantesFavoritosIds()?.includes(restaurante?.getId())

  const [disableFavorito, setDisableFavorito] = useState(false)
  if (!restaurante) return null

  const handleGotoRestauranteDetalle = () => {
    navigate('RestauranteDetalle', { restauranteId: restaurante.getId() })
  }

  const handleAddFavorito = async () => {
    try {
      setDisableFavorito(true)
      await onAddFavorito(restaurante?.getId())
    } finally {
      setDisableFavorito(false)
    }
  }
  const handleDeleteFavorito = async () => {
    try {
      setDisableFavorito(true)
      await onDeleteFavorito(restaurante?.getId())
    } finally {
      setDisableFavorito(false)
    }
  }
  const foto =
    restaurante.getUrlFotoRestaurante()[0] ||
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEDbEHQNBO6uY1dwIHIUprr5PatZJJdLubNdtMXxROQ&s'
  return (
    <View style={styles.card}>
      <StyledText fontSize='title' fontWeight='bold' style={styles.title}>
        {restaurante?.getNombre()}
      </StyledText>
      <View>
        <ImageBackground
          source={{
            uri: foto
          }}
          style={styles.image}
          resizeMode='cover'
        >
          {cliente && (
            <BotonFavorito
              estaEnFavorito={estaEnFavorito}
              onPress={estaEnFavorito ? handleDeleteFavorito : handleAddFavorito}
              disable={disableFavorito}
            />
          )}
        </ImageBackground>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            <StartCalificacion calificacion={calificacion} disable starSize={20} />
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
            onPress={handleGotoRestauranteDetalle}
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
  iconFavorito: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 100,
    margin: 10
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
