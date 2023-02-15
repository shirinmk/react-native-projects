import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const CustomMarker = props => {
  const {coordinate, price} = props;
  return (
        <Marker coordinate={{coordinate}}>
          <View
            style={{
              backgroundColor: 'black',
              borderColor: 'grey',
              borderRadius: 10,
              padding: 2,
            }}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>${price}</Text>
          </View>
        </Marker>
  );
};

export default CustomMarker;
