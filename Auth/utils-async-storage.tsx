

import AsyncStorage from '@react-native-community/async-storage';


export async function getItem<T>(key: string): Promise<T | null> {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}
export async function removeItem(key: string): Promise<void> {
  return AsyncStorage.removeItem(key);
}

const TOKEN = "token";

export const getToken = () => getItem<string>(TOKEN)
export const removeToken = () => removeItem(TOKEN)
export const setToken  = (value : string ) => setItem<string>(TOKEN,value)