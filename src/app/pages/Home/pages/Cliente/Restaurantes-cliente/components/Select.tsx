import MyIcon from '@/app/components/MyIcon'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Select = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: 'red',
        overflow: 'hidden',
        alignSelf: 'flex-start'
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: theme.colors.primary
        }}
      >
        <StyledText color='secondary' fontWeight='bold'>
          Ciudad
        </StyledText>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: theme.colors.tertiary,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8
        }}
      >
        <StyledText color='secondary' fontWeight='bold'>
          Buenaventura
        </StyledText>
        <TouchableWithoutFeedback>
          <MyIcon nombre={'close-circle'} color={theme.colors.secondary} tamano={18} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Select
