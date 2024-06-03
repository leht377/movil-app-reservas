import React from 'react'
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableNativeFeedback,
  View
} from 'react-native'
import StyledText from '../../../../../../components/StyledText'
import MyIcon from '../../../../../../components/MyIcon'
import theme from '../../../../../../../common/theme'

interface Props {
  iconName: string
  text: string
  onPress?: (event: GestureResponderEvent) => void
}
const OpcionItem: React.FC<Props> = ({ iconName, text, onPress }) => {
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
      <TouchableNativeFeedback onPress={onPress}>
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
