import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { formatDate, formatDuration, formatTime } from '../../utils/Date'
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Spacer,
  Text,
  Icon,
  Actionsheet,
  IconButton,
} from 'native-base'

type CustomActionSheetProps = {
  isOpen: boolean
  onClose: () => void
  item: Class
}

const CustomActionSheet = ({
  item,
  isOpen,
  onClose,
}: CustomActionSheetProps) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content alignItems="flex-start" px="6">
        <Box py="4" mb="4" width="full">
          <HStack alignItems="center">
            <Text fontSize="xl" color={colors.primary[500]} fontWeight="bold">
              {item?.name}
            </Text>
            <Spacer />
            <IconButton
              borderRadius="full"
              onPress={() =>
                navigation.navigate('ClassEdit', {
                  classId: item?.id,
                })
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
          <Text>{item?.description}</Text>
        </Box>
        <HStack width="full" mb="6">
          <VStack space="4">
            <HStack space="3">
              <Icon
                as={<Feather name="user" />}
                size={6}
                color={colors.muted[800]}
              />
              <Text>{item?.teacher_name}</Text>
            </HStack>
            <HStack space="3">
              <Icon
                as={<Feather name="watch" />}
                size={6}
                color={colors.muted[800]}
              />
              <Text>{formatDuration(item?.duration)}</Text>
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
              <Text>{formatDate(item?.start_time)}</Text>
            </HStack>
            <HStack space="3">
              <Icon
                as={<Feather name="clock" />}
                size={6}
                color={colors.muted[800]}
              />
              <Text>{formatTime(item?.start_time)}</Text>
            </HStack>
          </VStack>
        </HStack>
      </Actionsheet.Content>
    </Actionsheet>
  )
}

export default CustomActionSheet
