import React from 'react'
import {
  Pressable,
  StyleSheet,
  Touchable,
  View,
  useWindowDimensions
} from 'react-native'
import { TabView, SceneMap, TabBar, TabBarProps } from 'react-native-tab-view'
import StyledText from '../../../../../components/StyledText'
import theme from '../../../../../../common/theme'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import MenuRestaurantes from './MenuRestaurantes'
import IntalaccionesRestaurante from './IntalaccionesRestaurante'

const FirstRoute = () => (
  <View style={{ flex: 1 }}>
    <MenuRestaurantes />
  </View>
)

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <IntalaccionesRestaurante />
  </View>
)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute
})

const renderTabBar = (props2) => {
  //

  return (
    <TabBar
      {...props2}
      renderTabBarItem={(props) => {
        const focused =
          props.route.title ===
          props.navigationState.routes[props.navigationState.index].title

        return (
          <TouchableWithoutFeedback
            onPress={() => props2?.jumpTo(props.key)}
            key={props?.key}
          >
            <View
              style={[
                styles.tab,
                focused && { backgroundColor: theme.colors.primary }
              ]}
            >
              <StyledText
                fontWeight='bold'
                color={focused ? 'secondary' : 'quaternary'}
              >
                {props.route.title}
              </StyledText>
            </View>
          </TouchableWithoutFeedback>
        )
      }}
      indicatorStyle={{ backgroundColor: 'transparent' }}
      pressOpacity={0}
      pressColor='transparent'
      style={styles.tabBar}
      activeColor='red'
      inactiveColor='purple'
      tabStyle={styles.tab}
    />
  )
}

const CustomTabView = () => {
  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'first', title: 'Menú' },
    { key: 'second', title: 'Instalaciones' }
  ])

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0 // Remove shadow on iOS
  },
  tab: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 100,
    margin: 2,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    width: 'auto'
  }
})

export default CustomTabView
