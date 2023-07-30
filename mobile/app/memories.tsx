import Icon from '@expo/vector-icons/Feather'
import { Link, useRouter } from 'expo-router'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../src/assets/logo.svg'
import { api } from '../src/lib/api'

export default function NewMemory() {
  const { bottom, top } = useSafeAreaInsets()
  const router = useRouter()

  async function signOut() {
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  async function loadMemories() {
    const token = await SecureStore.getItemAsync('token')
    const response = await api.get('memories', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response.data)
  }

  useEffect(() => {
    loadMemories()
  }, [])

  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
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
          <View className="flex-row items-center gap-2">
            <View className="h-px w-5 bg-gray-50" />
            <Text className="font-body text-xs text-gray-100">Fake Memory</Text>
          </View>
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
          <Link href="/memories/id" asChild>
            <TouchableOpacity className="flex-row items-center gap-2">
              <Text className="font-body text-sm text-gray-200">Ler mais</Text>
              <Icon name="arrow-right" size={16} color="#9e9ea0" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
