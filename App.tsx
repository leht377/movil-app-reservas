import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './src/app/routes/app.routes'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </View>
    </NavigationContainer>
  )
}
