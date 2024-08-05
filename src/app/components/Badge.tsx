import React from 'react'
import { ColorValue, StyleSheet, View } from 'react-native'
import StyledText, { StyledTextProps } from './StyledText'
import theme from '../../common/theme'
import MyIcon from './MyIcon'
interface Props {
  icon?: string
  color?: ColorValue
  textColor?: StyledTextProps['color']
  radiusBadge?: number
  iconColor?:string
  text: string
}

const Badge: React.FC<Props> = ({
  icon,
  text,
  color,
  radiusBadge,
  textColor,
  iconColor
}) => {
  return (
    <View
      style={[
        styles.badge,
        color && { backgroundColor: color },
        radiusBadge && { borderRadius: radiusBadge }
      ]}
    >
      <View style={styles.content}>
        {icon && <MyIcon tamano={18} nombre={icon} color={iconColor} />}
        <StyledText
          fontWeight='bold'
          fontSize='bodymini'
          color={textColor ? textColor : 'quaternary'}
        >
          {text}
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    width: 'auto',
    backgroundColor: theme.colors.quinary,
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})

export default Badge
