import {StyleSheet} from 'react-native';

import {Metrix} from '../../config';
import {Colors} from '../../config/color';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  halfCircle: {
    height: Metrix.VerticalSize(510),
    overflow: 'hidden',
    zIndex: 100,
  },

  imgContainer: {
    position: 'absolute',
    zIndex: 2,
  },

  contentCont: {
    width: Metrix.HorizontalSize(355),
    flex: 1,
    alignSelf: 'center',
    marginTop: Metrix.VerticalSize(67),
  },

  rectangle: {
    position: 'absolute',
    top: Metrix.VerticalSize(200),
    left: Metrix.HorizontalSize(-50),
    width: Metrix.HorizontalSize(510),
    height: Metrix.VerticalSize(86),
    zIndex: 1,
  },

  skipBtn: {
    width: Metrix.HorizontalSize(65),
    // height: Metrix.VerticalSize(35),
    borderRadius: Metrix.Radius,
    alignSelf: 'flex-end',
    marginTop: Metrix.VerticalSize(60),
    marginRight: Metrix.HorizontalSize(23),
  },

  activeDotStyle: {
    backgroundColor: Colors.blue,
    width: Metrix.HorizontalSize(33),
    height: Metrix.VerticalSize(8),
    borderRadius: 5,
  },

  dotStyle: {
    backgroundColor: '#D9D9D9',
    width: Metrix.HorizontalSize(8),
    height: Metrix.VerticalSize(8),
    borderRadius: 5,
  },
});
