import StyledText from '@/app/components/StyledText'
import { View, StyleSheet } from 'react-native'
import OpcionItem from '../../../Cliente/Home-cliente/components/OpcionItem'
import { useAppSelector } from '@/redux/hooks/useAppSelector'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeRestauranteStackParamslist } from '@/app/routes/types/homeRestaurante.stack.paramslist'
import useLogOut from '@/app/hooks/useLogOut'

const OpcionesRestauranteSection = () => {
  const { navigate } = useNavigation<StackNavigationProp<HomeRestauranteStackParamslist>>()
  const { usuario } = useAppSelector((state) => state.usuario)
  const { restaurante } = useAppSelector((state) => state.restaurante)
  const { LogOut } = useLogOut()
  return (
    <View style={styles.container}>
      <View style={styles.containerPrincipio}>
        <StyledText fontWeight='bold' fontSize='title'>
          Restaurante {usuario ? restaurante?.getNombre() : 'bienvenido'}
        </StyledText>
        <StyledText fontSize='bodymini'>{usuario?.getCorreo()}</StyledText>
      </View>
      <View style={styles.containerBotonesOpciones}>
        <View style={styles.row}>
          <View style={styles.column}>
            <OpcionItem
              iconName='restaurant'
              text='Administrar restaurante'
              onPress={() => navigate('AdministrarRestaurante')}
            />
            <View style={styles.emptySpace} />
          </View>
          <View style={styles.column}>
            <OpcionItem
              iconName='fast-food'
              text='Administrar menú'
              onPress={() => navigate('AdministrarMenu')}
            />
            <OpcionItem
              iconName='image'
              text='Fotos instalaciones'
              onPress={() => navigate('FotosInstaciones')}
            />
          </View>
          <View style={styles.column}>
            <OpcionItem
              iconName='calendar-number'
              text='Administrar reservas'
              onPress={() => navigate('AdmnistrarReserva')}
            />
            <OpcionItem iconName='log-out' text='Cerrar sesión' onPress={LogOut} />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 30
  },
  containerPrincipio: {
    alignItems: 'flex-start',
    marginBottom: 20
  },
  containerBotonesOpciones: {
    gap: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 60
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20
  },
  emptySpace: {
    height: 48 // Ajusta este valor según el tamaño del botón
  }
})

export default OpcionesRestauranteSection
