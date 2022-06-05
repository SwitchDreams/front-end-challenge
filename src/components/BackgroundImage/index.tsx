import React from 'react'
import { ImageBackground, Dimensions } from 'react-native'
import { KeyboardAvoidingView } from 'native-base'
import { Box } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

type BackgroundImageProps = {
  screen: 'Login' | 'Sign up'
  children: React.ReactNode
}

const BackgroundImage = ({ screen, children }: BackgroundImageProps) => {
  const getBackgroundImage = (screen: string) => {
    switch (screen) {
      case 'Login':
        return require('../../../assets/login_bg.png')
      case 'Sign up':
        return require('../../../assets/signup_bg.png')
    }
  }

  return (
    <>
      <ImageBackground
        source={getBackgroundImage(screen)}
        style={{
          position: 'absolute',
          left: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height + 50,
        }}
        resizeMode="cover"
      />
      <Box
        size="full"
        backgroundColor="rgba(21, 8, 43, 0.6)"
        position="absolute"
      >
        <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
      </Box>
    </>
  )
}

export default BackgroundImage
