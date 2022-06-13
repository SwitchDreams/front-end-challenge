import * as Font from 'expo-font'
import theme from './src/styles/theme'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import { StatusBar } from 'expo-status-bar'
import ClassList from './src/screens/ClassList'
import ClassEdit from './src/screens/ClassEdit'
import { NativeBaseProvider } from 'native-base'
import * as SplashScreen from 'expo-splash-screen'
import { useState, useEffect, useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  Lexend_100Thin,
  Lexend_200ExtraLight,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_700Bold,
  Lexend_800ExtraBold,
  Lexend_900Black,
} from '@expo-google-fonts/lexend'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Lexend_100Thin,
          Lexend_200ExtraLight,
          Lexend_300Light,
          Lexend_400Regular,
          Lexend_500Medium,
          Lexend_700Bold,
          Lexend_800ExtraBold,
          Lexend_900Black,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NativeBaseProvider theme={theme}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClassList"
              component={ClassList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ClassEdit"
              component={ClassEdit}
              options={{ title: 'Edição de aula' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}
