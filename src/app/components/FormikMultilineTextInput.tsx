import { useField } from 'formik';
import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import StyledText from './StyledText';
import theme from '@/common/theme';

interface FormikMultilineTextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  disable?: boolean;
}

const FormikMultilineTextInput: React.FC<FormikMultilineTextInputProps> = ({
  name,
  label,
  placeholder,
  disable = false,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, styles.multiline]}
        onChangeText={helpers.setValue}
        value={field.value}
        placeholder={placeholder}
        editable={!disable}
        multiline={true}
      />
      {meta.error && meta.touched && (
        <StyledText fontSize='bodymini' color='primary' fontWeight='bold'>
        * {meta.error?.toString()}
      </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: theme.fontSize.title,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  multiline: {
    height: 100,
    textAlignVertical: 'top', // Ensure text starts from the top
  },

});

export default FormikMultilineTextInput;
