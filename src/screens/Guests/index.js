import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SearchResultsScreen from '../SearchResults';
import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        {/* row 1 adult  */}
        <View style={styles.row}>
          {/* {title } */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: 'grey'}}>Ages 13 or above</Text>
          </View>
          {/* Buttons  */}
          <View style={{flexDirection: 'row'}}>
            {/* -  */}
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>
            {/* +  */}
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        {/* row 1 adult end  */}
        {/* next row  */}
        <View style={styles.row}>
          {/* {title } */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: 'grey'}}>Ages 2 to 12</Text>
          </View>
          {/* Buttons  */}
          <View style={{flexDirection: 'row'}}>
            {/* -  */}
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            {/* +  */}
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        {/* next row  */}
        <View style={styles.row}>
          {/* {title } */}
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: 'grey'}}>under 2</Text>
          </View>
          {/* Buttons  */}
          <View style={{flexDirection: 'row'}}>
            {/* -  */}
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            {/* value */}
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            {/* +  */}
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        style={styles.searchContainer}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }>
        <Text style={styles.searchButton}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestScreen;
