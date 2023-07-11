import { View } from 'react-native'
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
      </View>
    </View>
  )
}
