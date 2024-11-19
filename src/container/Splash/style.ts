import {StyleSheet} from 'react-native';
import {Metrix} from '../../config';
import {Colors} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: Colors.primary,
  },
  rectangle: {
    width: 330,
    height: 30,
    backgroundColor: 'blue',
    transform: [{rotate: '-10deg'}],
  },
  text: {
    marginTop: Metrix.VerticalSize(19),
  },
});

export default styles;
