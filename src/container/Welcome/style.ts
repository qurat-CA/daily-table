import {StyleSheet} from 'react-native';
import {Metrix} from '../../config';
import {Colors} from '../../config/color';

export default StyleSheet.create({
  textCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  rectangle: {
    position: 'absolute',
    top: 200,
    left: -50,
    width: Metrix.HorizontalSize(510),
    height: Metrix.VerticalSize(86),
    zIndex: 1,
    backgroundColor: Colors.blue,
    transform: [{rotate: '23deg'}],
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  skipBtn: {
    width: Metrix.HorizontalSize(65),
    height: Metrix.VerticalSize(35),
    alignSelf: 'flex-end',
    marginTop: Metrix.VerticalSize(19),
    marginRight: Metrix.HorizontalSize(23),
  },
});
