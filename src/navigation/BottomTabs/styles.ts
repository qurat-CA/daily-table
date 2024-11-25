import {StyleSheet} from 'react-native';
import {Metrix} from '../../config';
import {Colors, shadow} from '../../config/color';

const styles = StyleSheet.create({
  tabOuterContainer: {
    flex: 1,
    position: 'absolute',
    bottom: Metrix.VerticalSize(-1),
    ...shadow,
  },

  tabInnerContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrix.HorizontalSize(30),
  },

  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },

  animatedWhiteBGCircle: {
    width: Metrix.HorizontalSize(70),
    height: Metrix.HorizontalSize(70),
    top: Metrix.VerticalSize(-40),
    backgroundColor: 'transparent',
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
