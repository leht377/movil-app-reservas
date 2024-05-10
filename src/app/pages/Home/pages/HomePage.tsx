import React from 'react'
import { StyleSheet, View } from 'react-native'
import MyButton from '../../../components/Button'
import StyledText from '../../../components/StyledText'
import { Text } from '@rneui/themed'
import StyledTextInput from '../../../components/StyledTextInput'
import Button from '../../../components/Button'
const HomePage = () => {
  return (
    <View>
      <Button title='Hola mundo' fontSize='title' fontWeight='bold' color='primary' />

      {/* <StyledText fontSize='body'>Hola mundo</StyledText> */}
      <View style={{ padding: 20 }}>
        <StyledTextInput placeholder='Contraseña' keyboardType='password' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomePage
