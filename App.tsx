/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Text testID="tid-loading-text">Loading...</Text>
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-inter-700 text-lg text-zinc-700">
        Welcome to my template 🎉
      </Text>

      <View className="items-start justify-center text-start w-1/2 mt-5">
        <Text className="font-inter-400 text-xs text-zinc-700">
          · Nativewind
        </Text>
        <Text className="font-inter-400 text-xs text-zinc-700">· Eslint</Text>
        <Text className="font-inter-400 text-xs text-zinc-700">
          · TypeScript
        </Text>
        <Text className="font-inter-400 text-xs text-zinc-700">· Husky</Text>
        <Text className="font-inter-400 text-xs text-zinc-700">
          · Custom fonts
        </Text>
        <Text className="font-inter-400 text-xs text-zinc-700">· Jest</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
