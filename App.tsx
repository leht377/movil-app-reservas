import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './src/app/routes/app.routes'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  )
}
