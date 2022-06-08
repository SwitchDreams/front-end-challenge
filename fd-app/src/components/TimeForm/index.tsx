import React, { useState } from 'react';
import { TextInput, View, Button, Touchable, TouchableOpacity, Text, StyleProp, TextStyle } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles } from './styles';

interface Props {
  myStyle?: StyleProp<TextStyle>
  setTime?: (date: Date) => void
  mode: 'date' | 'time'
}

export function TimeForm({ myStyle, setTime, mode }: Props) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false)

  function changeDate(event: any, selectedDate: any) {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);

    if(setTime) {
      setTime(currentDate)
    }
  };

  function getTime() {
    return isTimeSelected ?
      date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') :
      'HH:MM'
  }

  function getDate() {
    return 'dias'      
  }

  return (
    <View style={[{ width: '100%' }, myStyle]}>

      <Text style={styles.title}>
        Horário
      </Text>

      <TouchableOpacity activeOpacity={1} onPress={() => { setIsTimeSelected(true); setShow(true) }} style={styles.container} >

        <Text style={styles.time}>
          {mode === 'time' ? getTime() : getDate() }
        </Text>

        {show &&
          <DateTimePicker
            testID="dateTimePicker"
            display='clock'
            mode='time'
            value={date}
            is24Hour={true}
            onChange={changeDate}
          />
        }
      </TouchableOpacity>
    </View>
  );
}