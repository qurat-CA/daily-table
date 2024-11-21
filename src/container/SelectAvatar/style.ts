import {StyleSheet} from 'react-native';

import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    overflow: 'hidden',
    backgroundColor: 'pink',
    width: Metrix.HorizontalSize(92),
    height: Metrix.HorizontalSize(92),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedAvatarCont: {
    width: Metrix.HorizontalSize(22),
    height: Metrix.HorizontalSize(22),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: Colors.green,
    top: -8,
    right: 10,
  },

  img: {
    width: Metrix.HorizontalSize(59),
    height: Metrix.VerticalSize(90),
    marginTop: Metrix.VerticalSize(20),
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
