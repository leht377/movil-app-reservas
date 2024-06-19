import React from 'react'
import { TouchableWithoutFeedback, Animated, View, StyleSheet } from 'react-native'
import MyIcon from '@/app/components/MyIcon'
import theme from '@/common/theme'

interface BotonFavoritoProps {
  estaEnFavorito: boolean
  onPress: () => void
  disable: boolean
}

const BotonFavorito: React.FC<BotonFavoritoProps> = ({ estaEnFavorito, onPress, disable }) => {
  const scaleAnim = new Animated.Value(1) // Valor inicial de escala

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      useNativeDriver: true
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true
    }).start()
    onPress()
  }

  return (
    <TouchableWithoutFeedback
      disabled={disable}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.iconFavorito, { transform: [{ scale: scaleAnim }] }]}>
        <MyIcon
          nombre={estaEnFavorito ? 'heart' : 'heart-outline'}
          tamano={30}
          color={theme.colors.primary}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  iconFavorito: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 100,
    margin: 10
  }
})

export default BotonFavorito
