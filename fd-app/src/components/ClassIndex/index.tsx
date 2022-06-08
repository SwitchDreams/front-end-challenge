import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { ClassThumbnail } from '../ClassThumbnail';

import { styles } from './styles';

export function ClassIndex({ navigation }: any) {


  const classes = [<ClassThumbnail />, <ClassThumbnail />, <ClassThumbnail />, <ClassThumbnail />, <ClassThumbnail />,]

  return (
    <View style={styles.container}>


      <ScrollView indicatorStyle='white' style={styles.scroll} contentContainerStyle={styles.contentScrooll}>

        {classes.map((value, idx) =>
          (
            <TouchableOpacity key={idx} style={styles.thumbContainer} onPress={() => navigation.navigate('Show')}>
              {value}
            </TouchableOpacity>
          )
        )
        }
      </ScrollView>

      {/* <TouchableOpacity style={{width: '100%', alignItems: 'center'}} onPress={() => navigation.goBack()}>
        <ClassThumbnail />
      </TouchableOpacity> */}

    </View>
  );
}