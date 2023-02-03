import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '90%' /* need height otherwise not showing*/,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,

    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    width: '70%' /*line move to second line */,
  },
  button: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  searchButton: {
    backgroundColor: 'white',
    position: 'absolute',
    width: Dimensions.get('screen').width - 20,
    top: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    zIndex: 100,
  },
  SearchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
