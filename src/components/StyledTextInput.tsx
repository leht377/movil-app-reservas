import React, { useEffect, useState } from 'react'
import {
  ColorValue,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle
} from 'react-native'
import theme from '../common/theme'
import StyledText from './StyledText'
import MyIcon from './MyIcon'
import Button from './Button'

interface StyledTextInputProps {
  keyboardType?: KeyboardTypeOptions | 'password'
  placeholder?: string
  style?: TextStyle
  placeholderTextColor?: ColorValue
  containerInputStyle?: ViewStyle
  label?: string
  value?: string
  onChage?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  onChangeText?: (text: string) => void
}

const StyledTextInput: React.FC<StyledTextInputProps> = ({
  keyboardType = 'default',
  placeholder,
  style,
  placeholderTextColor,
  containerInputStyle,
  label,
  value,
  onChage,
  onChangeText
}) => {
  const isTypePassword = keyboardType === 'password'
  const keyboardTypeImpl: KeyboardTypeOptions = isTypePassword ? 'default' : keyboardType

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [iconType, setIconType] = useState<string>('eye')
  const handleShowPassword = () => {
    setIconType(!showPassword ? 'eye-off' : 'eye')
    setShowPassword(!showPassword)
  }

  return (
    <View style={styles.container}>
      {label && (
        <StyledText fontWeight='bold' fontSize='title'>
          {label}
        </StyledText>
      )}
      <View style={[containerInputStyle, styles.containerInput]}>
        <TextInput
          keyboardType={keyboardTypeImpl}
          placeholder={placeholder}
          style={[styles.inputDefaultStyle, style]}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={!showPassword}
          onChange={onChage}
          onChangeText={onChangeText}
          value={value}
        />
        {isTypePassword && (
          <Button color='transparent' onPress={handleShowPassword}>
            <MyIcon nombre={iconType} tamano={25} />
          </Button>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 3
  },
  containerInput: {
    borderStyle: 'solid',
    minHeight: 50,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  inputDefaultStyle: {
    fontSize: theme.fontSize.body,
    fontWeight: '800',
    flex: 1,
    color: theme.colors.quaternary
  }
})

export default StyledTextInput
