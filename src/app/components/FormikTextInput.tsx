import { useField } from 'formik'
import React from 'react'
import { KeyboardTypeOptions, StyleSheet, View } from 'react-native'
import StyledTextInput from './StyledTextInput'
import StyledText from './StyledText'

interface FormikextInputProps {
  keyboardType?: KeyboardTypeOptions | 'password'
  placeholder?: string
  name: string
  // style?: TextStyle
  // placeholderTextColor?: ColorValue
  // containerInputStyle?: ViewStyle
  // label?: string
  // value?: string
  // onChage?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
  // onChangeText?: (text: string) => void
}
const FormikTextInput: React.FC<FormikextInputProps> = ({
  name,
  keyboardType = 'default',
  placeholder
}) => {
  const [field, meta, helpers] = useField(name)
  return (
    <View style={{ gap: 5 }}>
      <StyledTextInput
        onChangeText={helpers.setValue}
        value={field.value}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
      {meta.error && (
        <StyledText fontSize='bodymini' color='primary' fontWeight='bold'>
          * {meta.error?.toString()}
        </StyledText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default FormikTextInput
