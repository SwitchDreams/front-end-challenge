import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ClassCard from '../../components/ClassCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { formatDate, formatDuration, formatTime } from '../../utils/Date'
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Spacer,
  Text,
  Stack,
  Icon,
  StatusBar,
  Actionsheet,
  useDisclose,
  IconButton,
} from 'native-base'

const data = [
  {
    id: 27,
    name: 'Zumba',
    description: 'Descrição maiorzinha',
    teacher_name: 'Pedro',
    start_time: '2022-05-24T15:36:11.000Z',
    duration: 3600,
    category_id: 44,
  },
  {
    id: 28,
    name: 'Treino Muzy',
    description: 'Descrição maiorzinha',
    teacher_name: 'Paulo Muzy',
    start_time: '2022-05-24T15:36:11.000Z',
    duration: 3600,
    category_id: 44,
  },
  {
    id: 29,
    name: 'Boxe',
    description: 'Descrição maiorzinha',
    teacher_name: 'Popó',
    start_time: '2022-05-24T15:36:11.000Z',
    duration: 3600,
    category_id: 44,
  },
]

type ClassListProps = NativeStackScreenProps<RootStackParamList, 'ClassList'>

const ClassList = ({ navigation }: ClassListProps) => {
  const { colors } = useTheme()
  const { isOpen, onOpen, onClose } = useDisclose(false)
  const [clickedItem, setClickedItem] = useState(data[0])

  const renderItem = ({ item }) => (
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
    <SafeAreaView>
      <StatusBar style="light" backgroundColor={colors.primary[500]} />
      <Stack space="4" py="8" px="6" backgroundColor={colors.primary[500]}>
        <Text fontSize="2xl" fontWeight="bold" color={colors.white}>
          Olá,{'\n'}Leo Ribas!
        </Text>
        <Text fontSize="lg" color={colors.white}>
          Veja aqui as aula disponíveis.{'\n'}Bora treinar?
        </Text>
      </Stack>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={({ id }) => id.toString()}
      />
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content alignItems="flex-start" px="6">
          <Box py="4" mb="4" width="full">
            <HStack alignItems="center">
              <Text fontSize="xl" color={colors.primary[500]} fontWeight="bold">
                {clickedItem.name}
              </Text>
              <Spacer />
              <IconButton
                borderRadius="full"
                onPress={() =>
                  navigation.navigate('ClassEdit', { classId: clickedItem.id })
                }
                icon={
                  <Icon
                    as={<Feather name="edit" />}
                    size={6}
                    color={colors.primary[500]}
                  />
                }
              />
            </HStack>
            <Text>{clickedItem.description}</Text>
          </Box>
          <HStack width="full" mb="6">
            <VStack space="4">
              <HStack space="3">
                <Icon
                  as={<Feather name="user" />}
                  size={6}
                  color={colors.muted[800]}
                />
                <Text>{clickedItem.teacher_name}</Text>
              </HStack>
              <HStack space="3">
                <Icon
                  as={<Feather name="watch" />}
                  size={6}
                  color={colors.muted[800]}
                />
                <Text>{formatDuration(clickedItem.duration)}</Text>
              </HStack>
            </VStack>
            <Spacer />
            <VStack space="4">
              <HStack space="3">
                <Icon
                  as={<Feather name="calendar" />}
                  size={6}
                  color={colors.muted[800]}
                />
                <Text>{formatDate(clickedItem.start_time)}</Text>
              </HStack>
              <HStack space="3">
                <Icon
                  as={<Feather name="clock" />}
                  size={6}
                  color={colors.muted[800]}
                />
                <Text>{formatTime(clickedItem.start_time)}</Text>
              </HStack>
            </VStack>
          </HStack>
        </Actionsheet.Content>
      </Actionsheet>
    </SafeAreaView>
  )
}

export default ClassList
