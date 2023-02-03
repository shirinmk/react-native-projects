import {View, Text, FlatList} from 'react-native';
import React from 'react';
import feed from '../../../assets/data/feed';
import Post from '../../componants/Post';
const post3 = feed[3];
console.log(post3);
const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList 
    //   dat must be array of items 
      data={feed}
      renderItem ={({item}) => <Post post={item}></Post>} />
    </View>
  );
};

export default SearchResultsScreen;
