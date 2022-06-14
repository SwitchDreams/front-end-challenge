import { FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import ClassCard from '../../components/ClassCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  useTheme,
  Text,
  Stack,
  useDisclose,
  Center,
  Spinner,
} from 'native-base'
import CustomActionSheet from '../../components/ActionSheet'

type ClassListProps = NativeStackScreenProps<RootStackParamList, 'ClassList'>

const ClassList = ({ navigation }: ClassListProps) => {
  const [username, setUsername] = useState('')
  const [classes, setClasses] = useState<Class[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { colors } = useTheme()
  const { isOpen, onOpen, onClose } = useDisclose(false)
  const [clickedItem, setClickedItem] = useState<Class>(classes[0])

  const getClasses = async () => {
    try {
      const response = await fetch(
        'https://switch-gym.herokuapp.com/api/gym_classes'
      )
      const json = await response.json()
      setClasses(json)
    } catch (error) {
      console.warn(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getUserInfo = async () => {
    const data = await AsyncStorage.getItem('userInfo')
    const parsedData = JSON.parse(data)
    setUsername(parsedData.name)
  }

  useEffect(() => {
    getClasses()
    getUserInfo()
  }, [])

  const renderItem = ({ item }: { item: Class }) => (
    <ClassCard
      name={item.name}
      teacherName={item.teacher_name}
      date={item.start_time}
      onPress={() => {
        onOpen()
        setClickedItem(item)
      }}
    />
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor={colors.primary[500]} />
      <Stack space="4" py="8" px="6" backgroundColor={colors.primary[500]}>
        <Text fontSize="2xl" fontWeight="bold" color={colors.white}>
          Olá,{'\n'}
          {username}!
        </Text>
        <Text fontSize="lg" color={colors.white}>
          Veja aqui as aula disponíveis.{'\n'}Bora treinar?
        </Text>
      </Stack>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" />
        </Center>
      ) : (
        <FlatList
          data={classes}
          renderItem={renderItem}
          keyExtractor={({ id }) => id.toString()}
          onRefresh={() => getClasses()}
          refreshing={isLoading}
        />
      )}
      <CustomActionSheet item={clickedItem} isOpen={isOpen} onClose={onClose} />
    </SafeAreaView>
  )
}

export default ClassList
