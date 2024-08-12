import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppRoutes from './src/app/routes/app.routes'
import { View } from 'react-native'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'

export default function App() {
  // return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <NativeViewGestureHandler disallowInterruption={true}>
          <View style={{ flex: 1 }}>
            <Provider store={store}>
              <AppRoutes />
            </Provider>
          </View>
        </NativeViewGestureHandler>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
