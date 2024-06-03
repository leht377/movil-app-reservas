import { View } from 'react-native'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { useState } from 'react'
import { TouchableNativeFeedback } from 'react-native'
import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import MyIcon from '@/app/components/MyIcon'

const FilterBadge = ({ title, onPress, isPlus = false }) => {
  return (
    <TouchableNativeFeedback onPress={() => onPress()}>
      <View
        style={{
          backgroundColor: isPlus
            ? theme.colors.primary
            : theme.colors.tertiary,
          flexDirection: 'row',
          alignSelf: 'flex-start',
          paddingVertical: 5,
          paddingHorizontal: 12,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          borderRadius: 100
        }}
      >
        <StyledText fontWeight='bold' color='secondary'>
          {title}
        </StyledText>

        <MyIcon
          nombre={isPlus ? 'add-circle' : 'close-circle-sharp'}
          tamano={22}
          color={theme.colors.secondary}
        />
      </View>
    </TouchableNativeFeedback>
  )
}

export default FilterBadge
