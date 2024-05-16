import React from 'react'
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native'
import theme from '../../../../../../common/theme'
import MyIcon from '../../../../../components/MyIcon'
import StyledText from '../../../../../components/StyledText'

interface Props {
  iconName: string
  text: string
}
const OpcionItem: React.FC<Props> = ({ iconName, text }) => {
  return (
    <View
      style={{
        width: 'auto',
        maxWidth: 110,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
      }}
    >
      <TouchableNativeFeedback>
        <View
          style={{
            backgroundColor: theme.colors.secondary,
            padding: 10,
            borderRadius: 10,
            elevation: 3
          }}
        >
          <MyIcon nombre={iconName} tamano={25} color={theme.colors.primary} />
        </View>
      </TouchableNativeFeedback>
      <StyledText fontWeight='bold' fontSize='bodymini' align='center'>
        {text}
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({})

export default OpcionItem