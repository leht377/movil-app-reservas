import { useField } from 'formik'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import SelectInput, { PropsSelectInput } from './SelectInput'
import StyledText from './StyledText'

interface Props {
  name: string
  data: PropsSelectInput['data']
  label?: PropsSelectInput['label']
  disable?: PropsSelectInput['disable']
  placeholder?: PropsSelectInput['placeholder']
}
const FormikSelectInput: React.FC<Props> = ({
  name,
  data,
  label,
  disable,
  placeholder
}) => {
  const [field, meta, helpers] = useField(name)
  return (
    <View style={{ gap: 5 }}>
      <SelectInput
        data={data}
        onSelect={(select) => helpers.setValue(select?.value)}
        label={label}
        value={field.value}
        disable={disable}
        placeholder={placeholder}
      />
      {meta.error && meta.touched && (
        <StyledText fontSize='bodymini' color='primary' fontWeight='bold'>
          * {meta.error?.toString()}
        </StyledText>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default FormikSelectInput
