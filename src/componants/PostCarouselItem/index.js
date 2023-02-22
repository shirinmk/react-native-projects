import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';

import styles from './styles.js';

const Post = props => {
  console.log('this is');
  console.log(props);
  const post = props.post;

  // get the size of screen
  const width = useWindowDimensions().width;
  return (
    <View style={[styles.container, {width: width - 80}]}>
      <View style={styles.innerContainer}>
        {/* Images */}
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={styles.bedroom}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          {/* ctrl+/ make comment  */}
          {/* type and description */}
          <Text style={styles.description} numberOfLines={2}>
            {' '}
            {post.type}
            {post.title}
          </Text>
          {/* old and new price  */}
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
          </Text>
        </View>
        {/* bed and bedroom */}
      </View>
      {/* // end of innerContainer */}
    </View>
  );
};

export default Post;
