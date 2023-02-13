import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';

import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  // we neeed to navigate to this
  const navigation = useNavigation();

  return (
    <View>
      {/* Search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination search')}>
        <Fontisto name="search" size={25} color={'red'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('This is a warning!')}>
          <Text style={styles.buttonText}>Explore nearby places</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
