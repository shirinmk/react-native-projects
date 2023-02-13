import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Input component  */}
      <TextInput
        style={styles.textInput}
        placeholder="search for places"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* list of destination  */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Guest')}>
            <View style={styles.iconContainer}>
              {/* show icon here  */}
              <Entypo name={'location-pin'} size={35} color={'black'} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
      {/* <Text>hello</Text> */}
    </View>
  );
};

export default DestinationSearchScreen;
