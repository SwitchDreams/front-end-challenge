import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_STORAGE} from "./storageConfig";



export async function storageAuthTokenSave(token: string) {
  await AsyncStorage.setItem(AUTH_STORAGE, token);
}

export async function storageAuthTokenGet() {
  const token = await AsyncStorage.getItem(AUTH_STORAGE);

  return token;
}

export async function storageAuthTokenRemove() {
  await AsyncStorage.removeItem(AUTH_STORAGE);
}
