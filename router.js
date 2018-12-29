import React, {PureComponent} from 'react'
import {BackHandler, Animated, Easing, Dimensions} from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import {connect} from 'react-redux'

import Login from './pages/Login'
import Home from './pages/Home'
import Monitor from './pages/Monitor'
import WO from './pages/WO'
import Video from './pages/Video'
import AssetFilter from "./components/AssetFilter";
import F2Test from './pages/F2Test'

const {width, height} = Dimensions.get('window');

const HomeNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  Monitor: {screen: Monitor},
  WO: {screen: WO},
  Video: {screen: F2Test},
})

HomeNavigator.navigationOptions = ({navigation}) => {
  const {routeName} = navigation.state.routes[navigation.state.index]
  if (routeName === 'Home') {
    return {
      headerTitle: '主页',
    }
  }
  if (routeName === 'Monitor') {
    return {
      headerTitle: '在线监测',
    }
  }
  if (routeName === 'WO') {
    return {
      headerTitle: '维保记录',
    }
  }
  if (routeName === 'Video') {
    return {
      headerTitle: '在线协助',
    }
  }
}

const MainNavigator = createDrawerNavigator(
  {
    HomeNavigator: {screen: HomeNavigator},
  },
  {
    drawerPosition: 'right',
    drawerWidth: width - 40,
    contentComponent: props => {
      return <AssetFilter/>
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    Main: {screen: MainNavigator},
    Login: {screen: Login},
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const {layout, position, scene} = sceneProps
        const {index} = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return {opacity, transform: [{translateY}]}
      },
    }),
  },
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router,
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({app, router}) => ({app, router}))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const {dispatch, router} = this.props

    return <App dispatch={dispatch} state={router}/>
  }
}

export default Router
