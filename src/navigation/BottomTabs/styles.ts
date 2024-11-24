import {StyleSheet} from 'react-native';
import {Metrix} from '../../config';
import {Colors, shadow} from '../../config/color';

const styles = StyleSheet.create({
  tabOuterContainer: {
    flex: 1,
    position: 'absolute',
    bottom: Metrix.VerticalSize(-1),
    height: Metrix.VerticalSize(75),
    backgroundColor: Colors.primary,
    width: '100%',
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    paddingHorizontal: 20,
    // alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    // ...shadow,
  },
  curvedBackground: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    zIndex: -1, // Place the background behind the tabs
  },
});

export default styles;
