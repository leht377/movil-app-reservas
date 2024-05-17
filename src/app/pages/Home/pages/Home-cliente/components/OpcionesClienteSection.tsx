import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import StyledText from '../../../../../components/StyledText'
import Button from '../../../../../components/Button'
import MyIcon from '../../../../../components/MyIcon'
import theme from '../../../../../../common/theme'
import OpcionItem from './OpcionItem'
import { useNavigation } from '@react-navigation/native'
import { HomeStackParamList } from '../../../../../routes/types/home.stack.paramlist'
import { StackNavigationProp } from '@react-navigation/stack'

const OpcionesClienteSection = () => {
  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>()

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <StyledText fontWeight='bold' fontSize='title'>
          Hola, cliente
        </StyledText>
        <StyledText fontSize='bodymini'>luiseduardohernandeztenorio@gmail.com</StyledText>
      </View>
      <View style={styles.containerOpciones}>
        <OpcionItem
          iconName='restaurant'
          text='Buscar restaurante'
          onPress={() => navigate('Restaurantes')}
        />
        <OpcionItem iconName='calendar-number' text='Administrar reservas' />
        <OpcionItem iconName='log-out' text='Cerrar sessión' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30
  },
  containerHeader: {},
  containerOpciones: { flexDirection: 'row', flexWrap: 'wrap', gap: 30 }
})

export default OpcionesClienteSection
