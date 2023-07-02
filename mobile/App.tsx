import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'
import { ImageBackground, Text, View } from 'react-native'
import Logo from './src/assets/logo.svg'
import blurBg from './src/assets/luz.png'
import Stripes from './src/assets/stripes.svg'

const StiledStripes = styled(Stripes)

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{
        position: 'absolute',
        left: '-100%',
      }}
      className="relative flex-1 items-center bg-gray-900 px-8"
    >
      <StiledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />

        <View className="space-y-2">
          <Text className=" text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
      </View>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
