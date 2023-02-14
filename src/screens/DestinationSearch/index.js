import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import SuggestionRow from './SuggestionRow';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* want to put google auto complete  */}
      <GooglePlacesAutocomplete
        placeholder="Where are you going"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          // navigate to gust page
          navigation.navigate('Guest');
          // navigation.navigate('Guest');
        }}
        fetchDetails
        query={{
          key: '',
          language: 'en',
          types: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
