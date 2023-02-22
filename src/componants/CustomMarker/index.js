import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          borderColor: 'grey',
          borderRadius: 10,
          padding: 2,
          borderWidth: 1,
        }}>
        <Text style={{color: isSelected? 'white' : 'black'}}>${price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
