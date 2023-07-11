import Icon from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../src/assets/logo.svg'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()

  return (
    <View
      className="flex-1 px-8"
      style={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className=" mt-4 flex-row items-center justify-between">
        <Logo />

        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#FFF" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
