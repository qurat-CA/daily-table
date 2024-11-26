import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },

  dropdown: {
    height: Metrix.VerticalSize(56),
    backgroundColor: Colors.whiteV3,
    borderRadius: Metrix.Radius,
    paddingHorizontal: Metrix.HorizontalSize(16),
  },

  placeholderStyle: {
    fontSize: 14,
    color: Colors.greyV2,
  },

  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  gradientWrapper: {
    borderRadius: Metrix.Radius,
    padding: Metrix.VerticalSize(1),
  },
});

export default styles;
