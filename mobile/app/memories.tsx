import Icon from '@expo/vector-icons/Feather'
import { Link, useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { Image, ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../src/assets/logo.svg'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function signOut() {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className=" mt-4 flex-row items-center justify-between">
        <Logo />

        <View className="flex-row gap-2">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
            onPress={signOut}
          >
            <Icon name="log-out" size={16} color="#000" />
          </TouchableOpacity>

          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        <View className="space-y-4">
          <Text className="text-white"> Fake Memory </Text>
        </View>
        <View className="space-y-4">
          <Image
            source={{
              uri: 'http://192.168.1.3:3333/uploads/98ff924b-d995-4249-92bc-1e2fde466ed5.jpg',
            }}
            className="aspect-video w-full rounded-lg"
            alt=""
          />
          <Text className="font-body text-base leading-tight text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            amet laudantium esse aut sit! Eos mollitia repellendus laborum
            perferendis porro, magni alias consequuntur non magnam. Impedit
            corporis modi commodi deleniti?
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
