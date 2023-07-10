import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Slot, SplashScreen } from 'expo-router'
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
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
    >
      <StiledStripes className="absolute left-2" />

      <StatusBar style="light" translucent />

      <Slot />
    </ImageBackground>
  )
}
