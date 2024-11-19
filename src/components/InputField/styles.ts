import {StyleSheet} from 'react-native';
import {Colors, fonts, Metrix} from '../../config';

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: Metrix.Radius,
    padding: Metrix.VerticalSize(1),
  },
  input: {
    height: Metrix.VerticalSize(56),
    flex: 1,
    // color: Colors.purpleV2,
    ...fonts.medium(),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderColor: '#CACACA',
    borderWidth: 1,
    borderRadius: Metrix.Radius,
    paddingHorizontal: Metrix.HorizontalSize(16),
    gap: 11,
  },
  mailIcon: {},
});

export const gradientColors = [
  '#FDDB32',
  '#FBCF35',
  '#F9B140',
  '#F47F50',
  '#EF3C67',
  '#EC1A73',
  '#B53689',
  '#8052A0',
];

export default styles;
