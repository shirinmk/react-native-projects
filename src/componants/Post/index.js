import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles.js';

const Post = props => {
  //   console.log(props);
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Images */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* bed and bedroom */}
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
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}>${post.newPrice}</Text>/ night
      </Text>
      {/* total price  */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
