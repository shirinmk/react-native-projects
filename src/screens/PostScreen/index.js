import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import DetailedPost from '../../componants/DetailedPost';
import places from '../../../assets/data/feed';
import {useRoute} from '@react-navigation/native'; //anither hiok
const post = places[0];

const PostScreen = () => {
  const route = useRoute();
  console.log('post id is ');
  console.log(route.params);
  const post = places.find(place => place.id === route.params.postid);

  return (
    <ScrollView>
      <View>
        <DetailedPost post={post} />
        <Text>{post.description}</Text>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
