import React from 'react'
import { Feather } from '@expo/vector-icons'
import { formatDate } from '../../utils/Date'
import { useTheme, Pressable, HStack, VStack, Icon, Text } from 'native-base'

type ClassCardProps = {
  name: string
  teacherName: string
  date: string
  onPress: () => void
}

const ClassCard = ({ name, teacherName, date, onPress }: ClassCardProps) => {
  const { colors } = useTheme()

  return (
    <Pressable py="4" px="6" onPress={onPress}>
      <HStack justifyContent="space-between">
        <VStack>
          <Text fontSize="xl" color={colors.primary[500]} fontWeight="bold">
            {name}
          </Text>
          <Text>{teacherName}</Text>
        </VStack>
        <HStack space={2}>
          <Icon
            as={<Feather name="calendar" size={20} />}
            size={5}
            ml={2}
            color={colors.muted[800]}
          />
          <Text>{formatDate(date)}</Text>
        </HStack>
      </HStack>
    </Pressable>
  )
}

export default ClassCard
