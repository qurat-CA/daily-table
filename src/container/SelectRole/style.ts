import {StyleSheet} from 'react-native';

import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  roleCont: {
    paddingHorizontal: Metrix.HorizontalSize(16),
    paddingVertical: Metrix.HorizontalSize(24),
    marginBottom: Metrix.VerticalSize(24),
    borderRadius: Metrix.VerticalSize(20),
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  radioBtnCont: {
    height: Metrix.VerticalSize(20),
    width: Metrix.VerticalSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrix.VerticalSize(100),
    borderColor: '#4A90E2',
    backgroundColor: '#fff',
    padding: 2,
  },
  selectedRole: {
    borderRadius: Metrix.VerticalSize(100),
    padding: 2,
  },
  radioBtn: {
    width: Metrix.HorizontalSize(13),
    height: Metrix.VerticalSize(13),
    backgroundColor: 'pink',
    borderRadius: Metrix.VerticalSize(100),
  },
  continueBtn: {
    position: 'absolute',
    bottom: Metrix.VerticalSize(47),
    width: '100%',
    right: Metrix.HorizontalSize(24),
  },
});

export {styles};
