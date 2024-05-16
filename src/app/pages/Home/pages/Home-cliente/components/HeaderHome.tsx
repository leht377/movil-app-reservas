import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import StyledText from '../../../../../components/StyledText'
import Button from '../../../../../components/Button'

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <StyledText color='secondary' fontWeight='bold' style={{ fontSize: 30 }}>
          Estas en busqueda de un restaurante
        </StyledText>
        <Button title='Reservar' color='primary' containerStyle={styles.button} fontWeight='bold' />
      </View>
      <ImageBackground
        source={require('../../../../../../../assets/header.jpg')}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
        resizeMode='cover'
      ></ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
  imageStyle: { opacity: 0.7 },

  button: { width: 160 },
  containerText: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 2,
    gap: 20,
    paddingHorizontal: 20
  }
})

export default HeaderHome
