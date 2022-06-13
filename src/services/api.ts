import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

const login = async (data) => {
  const response = await fetch(
    'https://switch-gym.herokuapp.com/api/users/login/',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        user: data,
      }),
    }
  )
  if (response.status === 401) {
    return false
  } else if (response.status === 200) {
    await SecureStore.setItemAsync(
      'bearer-token',
      response.headers.map.authorization
    )
    const data = await response.json()
    await AsyncStorage.setItem('userInfo', JSON.stringify(data))
  }
  return true
}

export { login }
