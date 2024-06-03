import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePicker, {
  DateTimePickerAndroid
} from '@react-native-community/datetimepicker'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from './Button'

const CalendarPicker = () => {
  const [date, setDate] = useState(new Date(1598051730000))

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true
    })
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  return (
    <SafeAreaView>
      <Button onPress={showDatepicker} title='Show date picker!' />
      <Button onPress={showTimepicker} title='Show time picker!' />
      <Text>selected: {date.toLocaleString()}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100
  }
})

export default CalendarPicker
