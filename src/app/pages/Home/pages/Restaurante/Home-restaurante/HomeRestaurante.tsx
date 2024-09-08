import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import OpcionesRestauranteSection from './components/OpcionesRestauranteSection'
import Button from '@/app/components/Button'
import StyledText from '@/app/components/StyledText'
import MyIcon from '@/app/components/MyIcon'
import theme from '@/common/theme'
import RestauranteCarbasico from '../components/RestauranteCarbasico'

const HomeRestaurante = () => {
  const today = new Date()
  const day = today.toLocaleString('es-ES', { weekday: 'long' })
  const date = today.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long'
  })

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.welcomeContainer}>
        <StyledText style={styles.welcomeText}>¡Bienvenido de nuevo! 🌞</StyledText>
        <View style={{ paddingTop: 10 }}>
          <StyledText>
            Hoy es {day}, {date}. ¡Esperamos que tengas un gran día lleno de reservas!
          </StyledText>
        </View>
      </View>
      <OpcionesRestauranteSection />

      <View style={styles.card}>
        <RestauranteCarbasico />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors.secondary
  },
  iconLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  iconRight: {
    flex: 1,
    alignItems: 'flex-end'
  },

  card: {
    paddingBottom: 10
  },
  welcomeContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    // elevation: 3,
    // borderWidth: 0.3,
    alignItems: 'flex-start'
  },
  welcomeText: {
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: 'bold'
  },
  subWelcomeText: {
    fontSize: 14,
    color: theme.colors.tertiary,
    marginTop: 5,
    textAlign: 'center'
  },
  iconContainer: {
    marginTop: 10
  }
})

export default HomeRestaurante
