import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  container: {
    marginTop: Metrix.VerticalSize(67),
    paddingHorizontal: Metrix.HorizontalSize(20),
  },
  pinCodeContainer: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.greyV2,
    width: Metrix.HorizontalSize(36),
    borderRadius: 0,
  },
  focusStick: {
    backgroundColor: Colors.purpleV2,
  },
  activePinCodeContainer: {
    borderColor: Colors.purpleV2,
  },
  pinCodeText: {
    color: Colors.purpleV2,
  },
});

export default styles;
