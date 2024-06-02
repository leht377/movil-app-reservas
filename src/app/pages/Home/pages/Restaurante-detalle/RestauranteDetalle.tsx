import React, { useEffect, useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'
import StyledText from '../../../../components/StyledText'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { HomeStackParamList } from '../../../../routes/types/home.stack.paramlist'
import useObtenerRestuaranteId from './hooks/useObtenerRestuaranteId'
import theme from '../../../../../common/theme'
import {
  FlatList,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import StartCalificacion from '../../../../components/StartCalificacion'
import MyIcon from '../../../../components/MyIcon'
import Button from '../../../../components/Button'
import Badge from '../../../../components/Badge'
import CustomTabView from './components/CustomTabView'
const Header = () => {
  return (
    <View>
      <View style={styles.headerRestaurante}>
        <View style={styles.containerText}>
          <StyledText
            color='secondary'
            fontWeight='bold'
            style={{ fontSize: 40 }}
          >
            Restaurante nombre
          </StyledText>
        </View>
        <ImageBackground
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEDbEHQNBO6uY1dwIHIUprr5PatZJJdLubNdtMXxROQ&s'
          }}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          resizeMode='cover'
        />
      </View>
      <View style={styles.containerInformacionBasica}>
        <View style={styles.containerDescripcion}>
          <StyledText align='justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eum cumque, tempora, ipsa qui delectus aliquid iste praesentium
            possimus quos, repellat alias provident doloribus atque commodi
            quisquam amet illum cupiditate?
          </StyledText>
        </View>
        <View style={styles.containerResenas}>
          <StartCalificacion calificacion={4} />
          <StyledText fontSize='body' fontWeight='bold'>
            {2000?.toLocaleString('en')} Reseñas
          </StyledText>
        </View>
        <View style={styles.containerLocation}>
          <MyIcon nombre={'location'} tamano={25} />
          <StyledText fontWeight='bold'>Buenaventura Crra 55</StyledText>
        </View>
        <View style={styles.containerDisponibilidad}>
          <Badge text='7:00 AM - 8:00 PM' icon='time' />
          <Badge text='LUNES - JUEVES' icon='today' />
        </View>
        <View style={styles.containerButton}>
          <Button title='Reservar' color='primary' />
        </View>
      </View>
    </View>
  )
}

const renderItem = () => {
  // return <View />
  return (
    <View
      style={{
        paddingHorizontal: 20,
        minHeight: Dimensions.get('screen').height - 200
      }}
    >
      <CustomTabView />
    </View>
  )
}

const RestauranteDetalle = () => {
  const { params } = useRoute<RouteProp<HomeStackParamList>>()
  const { restauranteId } = params
  const [scrollEnabled, setScrollEnable] = useState(true)
  // const { restaurante, loading } = useObtenerRestuaranteId(restauranteId)

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled stickyHeaderIndices={[1]}>
        {Header()}
        {renderItem()}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary
  },
  containerInformacionBasica: {
    gap: 10,
    marginBottom: 10
  },
  containerButton: {
    paddingHorizontal: 20
  },

  headerRestaurante: {
    position: 'relative',
    height: 250,
    marginBottom: 20
  },
  containerDescripcion: {
    paddingHorizontal: 20
  },
  containerResenas: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  containerLocation: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  containerDisponibilidad: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
    alignItems: 'center'
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  },
  imageStyle: { opacity: 0.7 },
  containerText: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    zIndex: 2,
    gap: 20,
    paddingHorizontal: 20
  },
  tab: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 100,
    margin: 2,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    width: 'auto'
  }
})

export default RestauranteDetalle
