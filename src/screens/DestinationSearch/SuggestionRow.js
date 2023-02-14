import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const SuggestionRow = ({item}) => (
  <View style={styles.row} onPress={() => navigation.navigate('Guest')}>
    <View style={styles.iconContainer}>
      {/* show icon here  */}
      <Entypo name={'location-pin'} size={35} color={'black'} />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
