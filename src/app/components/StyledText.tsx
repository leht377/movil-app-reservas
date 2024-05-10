import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

interface StyledTextProps {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary' | 'green'
  fontSize?: 'bodymini' | 'body' | 'title'
  fontWeight?: 'bold'
  textTransform?: 'capitalize' | 'lowercase' | 'none' | 'uppercase'
  textDecoration?: 'underline'
  style?: TextStyle
  isSelectable?: boolean
}

import theme from '../../common/theme'

const StyledText: React.FC<StyledTextProps> = ({
  children,
  align,
  color,
  fontSize,
  fontWeight,
  textTransform = 'none',
  textDecoration,
  style,
  isSelectable = false,
  ...restOfProps
}) => {
  const textStyle = [
    styles.text,

    color === 'primary' && styles.textPrimary,
    color === 'secondary' && styles.textSecondary,
    color === 'tertiary' && styles.textTertiary,
    color === 'quaternary' && styles.textQuaternary,
    color === 'quinary' && styles.textQuinary,
    color === 'green' && styles.textGreen,

    align === 'center' && styles.textAlignCenter,
    align === 'left' && styles.textLeft,
    align === 'right' && styles.textRigth,
    fontSize === 'title' && styles.title,
    fontSize === 'bodymini' && styles.bodymini,
    fontSize === 'body' && styles.body,
    fontWeight === 'bold' && styles.bold,
    textDecoration === 'underline' && styles.textUnderline,
    textTransform === 'capitalize' && styles.textCapitalize,
    textTransform === 'lowercase' && styles.textLowercase,
    textTransform === 'none' && styles.textNone,
    textTransform === 'uppercase' && styles.textUpperCase,
    style
  ]

  return (
    <Text selectable={isSelectable} style={textStyle} {...restOfProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSize.body,
    fontWeight: 'normal',
    color: theme.colors.quaternary
  },
  bold: {
    fontWeight: '800'
  },
  title: {
    fontSize: theme.fontSize.title
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textRigth: {
    textAlign: 'right'
  },
  textLeft: {
    textAlign: 'left'
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textUpperCase: {
    textTransform: 'uppercase'
  },
  textNone: {
    textTransform: 'none'
  },
  textLowercase: {
    textTransform: 'lowercase'
  },
  textCapitalize: {
    textTransform: 'capitalize'
  },

  bodymini: {
    fontSize: theme.fontSize.bodymini
  },
  body: {
    fontSize: theme.fontSize.body
  },

  textPrimary: {
    color: theme.colors.primary
  },
  textSecondary: {
    color: theme.colors.secondary
  },
  textTertiary: {
    color: theme.colors.tertiary
  },
  textQuaternary: {
    color: theme.colors.quaternary
  },
  textQuinary: {
    color: theme.colors.quinary
  },
  textGreen: {
    color: theme.colors.green
  }
})

export default StyledText
