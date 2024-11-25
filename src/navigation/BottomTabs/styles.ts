import {StyleSheet} from 'react-native';
import {Metrix} from '../../config';
import {Colors, shadow} from '../../config/color';

const styles = StyleSheet.create({
  tabOuterContainer: {
    flex: 1,
    position: 'absolute',
    bottom: Metrix.VerticalSize(0),
    height: Metrix.VerticalSize(75),
    backgroundColor: Colors.primary,
    width: '100%',
    borderTopRightRadius: Metrix.HorizontalSize(26),
    borderTopLeftRadius: Metrix.HorizontalSize(26),
    paddingHorizontal: Metrix.HorizontalSize(30),
    // alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    // ...shadow,
  },

  tabContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: Metrix.VerticalSize(12),
    alignItems: 'center',
    // backgroundColor: 'pink',
    // marginLeft: 1,
  },

  animatedWhiteBGCircle: {
    width: Metrix.HorizontalSize(70),
    height: Metrix.HorizontalSize(70),
    top: Metrix.VerticalSize(-40),
    // left: 0,
    // position: 'absolute',
    backgroundColor: Colors.white,
    borderRadius: 100,
    zIndex: -2,
  },

  animatedCircle: {
    width: Metrix.HorizontalSize(56),
    height: Metrix.HorizontalSize(56),
    position: 'absolute',
    backgroundColor: Colors.primary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -2,
  },
});

export default styles;
