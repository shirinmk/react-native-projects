import React, {useState} from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../componants/CustomMarker';
import PostCarouselItem from '../../componants/PostCarouselItem';

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  console.log(places);
  const width = useWindowDimensions().width;
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
        {places.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={place.coordinate}
            price={place.oldPrice}
            key={place.id}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 1}}>
        <FlatList
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          // how fast to go
          decelerationRate={'fast'}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
