import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'
import { ImageBackground } from 'react-native'
import blurBg from '../src/assets/luz.png'
import Stripes from '../src/assets/stripes.svg'

const StiledStripes = styled(Stripes)

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={blurBg}
      imageStyle={{
        position: 'absolute',
        left: '-100%',
      }}
      className="relative flex-1 bg-gray-900"
    >
      <StiledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />

      <Stack />
    </ImageBackground>
  )
}
