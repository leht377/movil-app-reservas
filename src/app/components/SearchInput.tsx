import theme from '@/common/theme'
import { SearchBar } from '@rneui/themed'
import React from 'react'
import { StyleSheet, View } from 'react-native'

// Definir las Props
interface SearchInputProps {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <SearchBar
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={{ color: theme.colors.tertiary }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e4e5ea',
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'gray',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  inputContainer: {
    backgroundColor: 'transparent',
    margin: 0
  }
})

export default SearchInput
