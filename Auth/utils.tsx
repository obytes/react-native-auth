

import SInfo from 'react-native-sensitive-info'

const TOKEN = 'token'
const SHARED_PERFS = 'MyAppSharedPerfs'
const KEYCHAIN_SERVICE = 'MyAppKeychain'
const keyChainOptions = {
  sharedPreferencesName: SHARED_PERFS,
  keychainService: KEYCHAIN_SERVICE,
}

export async function getItem<T>(key: string): Promise<T | null> {
  const value = await SInfo.getItem(key, keyChainOptions)
  return value ? value : null
}

export async function setItem<T>(key: string, value: T): Promise<void> {
  return SInfo.setItem(key, value, keyChainOptions)
}
export async function removeItem(key: string): Promise<void> {
  return SInfo.deleteItem(key, keyChainOptions)
}

export const getToken = () => getItem<string>(TOKEN)
export const removeToken = () => removeItem(TOKEN)
export const setToken = (value: string) => setItem<string>(TOKEN, value)