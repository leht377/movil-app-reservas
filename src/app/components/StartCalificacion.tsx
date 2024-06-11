import React from 'react'
import { StyleSheet, View } from 'react-native'
import Star from './Star'
import { AirbnbRating } from '@rneui/themed'
import theme from '@/common/theme'

interface Props {
  calificacion: number
  starSize?: number
  disable?: boolean
}
const StartCalificacion: React.FC<Props> = ({ calificacion, starSize = 24, disable }) => {
  return (
    <AirbnbRating
      showRating={false}
      onFinishRating={(n) => console.log(n)}
      size={starSize}
      selectedColor={theme.colors.primary}
      isDisabled={disable}
      defaultRating={calificacion}
    />
  )
  return (
    <View style={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((e, index) => {
        let tipo_estrella
        if (calificacion >= e) tipo_estrella = 'completa'
        else if (calificacion > e - 1 && calificacion < e) tipo_estrella = 'mitad'
        else tipo_estrella = 'vacia'
        return <Star type={tipo_estrella} size={starSize} key={index} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row'
  }
})

export default StartCalificacion
