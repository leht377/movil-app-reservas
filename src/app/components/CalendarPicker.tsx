import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DateTimePicker, {
  DateTimePickerAndroid
} from '@react-native-community/datetimepicker'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from './Button'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import theme from '@/common/theme'

LocaleConfig.locales['es'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.'
  ],
  dayNames: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
  today: 'Hoy'
}
LocaleConfig.defaultLocale = 'es'

function getFormattedDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

interface Props {
  onSelectDay: (daySelected: string) => void
  disableDates?: string[]
}

const CalendarPicker: React.FC<Props> = ({
  onSelectDay,
  disableDates = []
}) => {
  const [selected, setSelected] = useState('')
  const today = getFormattedDate(new Date())

  const disable = disableDates.reduce((a, c) => {
    a[c] = { disabled: true }
    return a
  }, {})

  useEffect(() => {
    selected && onSelectDay(selected)
  }, [selected])

  return (
    <SafeAreaView>
      <Calendar
        minDate={today}
        onDayPress={(day) => {
          setSelected(day.dateString)
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: theme.colors.primary
          },
          ...disable
        }}
        theme={{ arrowColor: theme.colors.primary }}
      />
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
