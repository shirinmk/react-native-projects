import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%', //this is very important to separte it
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    marginHorizontal: 20, //it put space two side of borde bottom
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
  searchButton: {
    color: 'white',
    fontSize:20
  },
});
export default styles;
