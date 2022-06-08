import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/components/Login';
import { theme } from './src/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, IBMPlexSans_400Regular, IBMPlexSans_600SemiBold } from '@expo-google-fonts/ibm-plex-sans';
import { setCustomText } from 'react-native-global-props'
import { Register } from './src/components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions, } from '@react-navigation/native-stack';
import { ClassIndex } from './src/components/ClassIndex';
import { Header } from './src/components/Header';
import { TabBar } from './src/components/TabBar';
import { myScreenOptions } from './src/util/screenOptions';

export default function App() {
  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  const Stack = createNativeStackNavigator()

  // setCustomText(customTextProps)
  SplashScreen.hideAsync()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={myScreenOptions}
        >
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
          <Stack.Screen name='Logged' component={TabBar} options={{ title: 'Aulas Disponíveis', headerShown: false }} />
        </Stack.Navigator>


      </NavigationContainer>
    </View>
  );
}

const customTextProps = {
  style: {
    fontFamily: theme.fonts.regular,
    color: theme.color.text
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
