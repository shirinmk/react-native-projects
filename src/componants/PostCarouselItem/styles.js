import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    margin: 20,
    padding: 1,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    // width: '50%',
    // height:200,
    height: '100%',
    aspectRatio: 1,
    // it makes image small
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    // lineHeight: 26,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 20,
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
export default styles;
