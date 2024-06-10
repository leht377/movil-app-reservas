import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

type UseAsyncStorageReturn<T> = {
  getValue: (key: string) => Promise<T | null>
  setValue: (key: string, value: T) => Promise<void>
  removeValue: (key: string) => Promise<void>
  loading: boolean
  error: Error | null
}

const useAsyncStorage = <T,>(): UseAsyncStorageReturn<T> => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  // Method to load the stored value from AsyncStorage by key
  const getValue = async (key: string): Promise<T | null> => {
    setLoading(true)
    try {
      const value = await AsyncStorage.getItem(key)
      return value ? JSON.parse(value) : null
    } catch (e) {
      setError(e as Error)
      return null
    } finally {
      setLoading(false)
    }
  }

  // Method to save the value to AsyncStorage with a key
  const setValue = async (key: string, value: T): Promise<void> => {
    setLoading(true)
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  // Method to remove the value from AsyncStorage by key
  const removeValue = async (key: string): Promise<void> => {
    setLoading(true)
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      setError(e as Error)
    } finally {
      setLoading(false)
    }
  }

  return { getValue, setValue, removeValue, loading, error }
}

export default useAsyncStorage
