import StyledText from '@/app/components/StyledText'
import theme from '@/common/theme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export interface PropsSelectInput {
  data: { label: string; value: any }[]
  onSelect: (selectedItem: { label: string; value: string }, index: number) => void
  value: any
  label?: string
  disable?: boolean
  placeholder?: string
}
const SelectInput: React.FC<PropsSelectInput> = ({
  data,
  onSelect,
  label,
  disable,
  value,
  placeholder
}) => {
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      disabled={disable}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View>
            {label && (
              <StyledText fontWeight='bold' fontSize='title'>
                {label}
              </StyledText>
            )}

            <View style={styles.dropdownButtonStyle}>
              <StyledText fontSize='body' style={styles.dropdownButtonTxtStyle}>
                {(value && selectedItem?.label && selectedItem.label) || placeholder}
              </StyledText>
              <Icon
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          </View>
        )
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: '#D2D9DF' })
            }}
          >
            <StyledText fontSize='body' style={styles.dropdownItemTxtStyle}>
              {item?.label}
            </StyledText>
          </View>
        )
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  )
}

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    // flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    borderRadius: 5,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12
  },
  dropdownButtonTxtStyle: {
    flex: 1,

    fontWeight: '500',
    color: '#151E26'
  },
  dropdownButtonArrowStyle: {
    fontSize: 28
  },
  dropdownButtonIconStyle: {
    marginRight: 8
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontWeight: '500',
    color: '#151E26'
  },
  dropdownItemIconStyle: {
    marginRight: 8
  }
})

export default SelectInput
