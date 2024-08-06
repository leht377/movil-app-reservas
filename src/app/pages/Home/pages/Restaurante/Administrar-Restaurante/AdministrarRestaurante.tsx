import { ScrollView, StyleSheet, View } from 'react-native'
import RestauranteCarbasico from '../components/RestauranteCarbasico'
import FormularioActulizarRestaurante from './components/FormularioActulizarRestaurante'
import theme from '@/common/theme'
import StyledText from '@/app/components/StyledText'

const AdministrarRestaurante = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <RestauranteCarbasico />
      </View>

      <View style={styles.formulario}>
        <FormularioActulizarRestaurante />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary
  },
  card: {
    marginBottom: 10
  },
  formulario: {
    marginBottom: 30
  }
})
export default AdministrarRestaurante
