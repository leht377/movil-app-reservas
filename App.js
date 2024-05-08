import { NavigationContainer } from '@react-navigation/native'
import MyTabs from './src/components/MyTabs'

export default function App () {
  return (
    <NavigationContainer>
      <MyTabs />
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style='auto' />
      </View> */}
    </NavigationContainer>
  )
}
