import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'

import OpcionItem from './OpcionItem'
import { useNavigation } from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack'
import StyledText from '../../../../../../components/StyledText'
import { HomeStackParamList } from '../../../../../../routes/types/home.stack.paramlist'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { AppStackParamList } from '@/app/routes/types/app.stack.paramlist'

const OpcionesClienteSection = () => {
  const { navigate } = useNavigation<StackNavigationProp<HomeStackParamList>>()
  const { usuario } = useAppSelector((state) => state.usuario)
  const { cliente } = useAppSelector((state) => state.cliente)

  const appNavigation = useNavigation<StackNavigationProp<AppStackParamList>>()
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <StyledText fontWeight='bold' fontSize='title'>
          Bienvenido {usuario ? cliente?.getNombre() : 'Reserva '}
        </StyledText>
        <StyledText fontSize='bodymini'>{usuario ? usuario?.getCorreo() : ''}</StyledText>
      </View>
      <View style={styles.containerOpciones}>
        <OpcionItem
          iconName='restaurant'
          text='Buscar restaurante'
          onPress={() => navigate('Restaurantes')}
        />
        <OpcionItem
          iconName='calendar-number'
          text='Administrar reservas'
          onPress={
            usuario
              ? () => appNavigation.navigate('ReservasPage')
              : () => appNavigation.navigate('PerfilPage')
          }
        />
        {usuario && <OpcionItem iconName='log-out' text='Cerrar sessión' />}
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
