import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, View } from 'react-native'
import theme from '../../../../../../common/theme'
import MyIcon from '../../../../../components/MyIcon'
import StyledText from '../../../../../components/StyledText'

const RestauranteRecomendadoItem = () => {
  return (
    <View
      style={{
        width: 110,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          borderWidth: 4,
          borderColor: theme.colors.primary,
          padding: 2,
          borderRadius: 100
        }}
      >
        <Image
          width={65}
          height={65}
          style={{ borderRadius: 100 }}
          resizeMode='cover'
          source={{
            uri: 'https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg'
          }}
          accessibilityLabel='restaurante'
          accessible
        />
      </View>
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <MyIcon nombre={'star-outline'} tamano={15} />
        <MyIcon nombre={'star-outline'} tamano={15} />
        <MyIcon nombre={'star-outline'} tamano={15} />
        <MyIcon nombre={'star-outline'} tamano={15} />
        <MyIcon nombre={'star-outline'} tamano={15} />
      </View>
      <StyledText fontWeight='bold' fontSize='body'>
        Tann's foot
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestauranteRecomendadoItem
