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
  radioButton: {
    width: Metrix.VerticalSize(20),
    height: Metrix.VerticalSize(20),
    borderRadius: Metrix.VerticalSize(100),
    borderWidth: 1,
    borderColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioFill: {
    width: Metrix.VerticalSize(13),
    height: Metrix.VerticalSize(13),
    borderRadius: Metrix.VerticalSize(100),
    backgroundColor: '#4A90E2',
  },
  selectedRole: {
    borderRadius: Metrix.VerticalSize(100),
    padding: 2,
  },
});

export {styles};
