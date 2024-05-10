import { StyleSheet, TextStyle, TouchableWithoutFeedbackProps, ViewStyle } from 'react-native'
import { Button as ThemedButton } from '@rneui/themed'
import React from 'react'
import theme from '../../common/theme'
import { StyleProp } from 'react-native'

interface Props {
  title?: string
  textColor?: string
  disabled?: boolean
  loading?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'green' | 'transparent'
  containerStyle?: StyleProp<ViewStyle>
  fontWeight?: 'bold' | 'normal'
  textAlign?: TextStyle['textAlign']
  fontSize?: 'bodymini' | 'body' | 'title'
  onPress?: TouchableWithoutFeedbackProps['onPress']
  children?: React.ReactNode
  buttonStyle?: StyleProp<ViewStyle>
}

const Button: React.FC<Props> = ({
  color = theme.colors.primary,
  title,
  disabled = false,
  loading = false,
  textColor = 'white',
  fontWeight,
  containerStyle,
  textAlign = 'center',
  fontSize = 'body',
  onPress,
  children,
  buttonStyle
}) => {
  const fontSizeMap: Record<Props['fontSize'], number> = {
    body: theme.fontSize.body,
    bodymini: theme.fontSize.bodymini,
    title: theme.fontSize.title
  }

  const colorMap: Record<Props['color'], string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    tertiary: theme.colors.tertiary,
    quaternary: theme.colors.quaternary,
    quinary: theme.colors.quinary,
    green: theme.colors.green,
    transparent: 'transparent'
  }

  const colorStyled = colorMap[color]
  const fontSizeStyle = fontSizeMap[fontSize]

  return (
    <ThemedButton
      title={title}
      titleStyle={{
        color: textColor,
        fontWeight: fontWeight,
        textAlign: textAlign,
        fontSize: fontSizeStyle
      }}
      color={colorStyled}
      disabled={disabled}
      loading={loading}
      buttonStyle={[{ borderRadius: 5 }, buttonStyle]}
      onPress={onPress}
      containerStyle={containerStyle}
      children={children}
    />
  )
}

const styles = StyleSheet.create({})

export default Button
