import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import theme from '@/common/theme'

import StarRating from 'react-native-star-rating-widget'
interface Props {
  calificacion: number
  starSize?: number
  disable?: boolean
  onChange?: (value: number) => {}
}
const StartCalificacion: React.FC<Props> = ({ calificacion, starSize = 24, disable, onChange }) => {
  const [rating, setRating] = useState(calificacion)
  const handleOnChange = (value) => {
    setRating(value)
    onChange && onChange(value)
  }
  return (
    <StarRating
      rating={rating}
      onChange={disable ? () => {} : handleOnChange}
      color={theme.colors.primary}
      starSize={starSize}
      starStyle={{ marginLeft: -6 }}
    />
    // <AirbnbRating
    //   showRating={false}
    //   onFinishRating={(n) => console.log(n)}
    //   size={starSize}
    //   selectedColor={theme.colors.primary}
    //   isDisabled={disable}
    //   defaultRating={calificacion}
    // />
  )
}

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row'
  }
})

export default StartCalificacion
