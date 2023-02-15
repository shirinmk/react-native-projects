import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const SearchResultsMap = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <MapView
        style={{
          width: '100%',
          height: '100%',
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
          <View
            style={{
              backgroundColor: 'black',
              borderColor: 'grey',
              borderRadius: 10,
              padding: 2,
            }}>
            <Text style={{color: 'white'}}>$300</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default SearchResultsMap;
