import {StyleSheet} from 'react-native';
import {Colors, Metrix} from '../../config';

const styles = StyleSheet.create({
  nameCont: {flex: 0.5},
  addUserCont: {
    height: Metrix.VerticalSize(61),
    marginTop: Metrix.VerticalSize(30),
    borderRadius: Metrix.Radius,
    borderWidth: Metrix.HorizontalSize(1),
    borderStyle: 'dashed',
    borderColor: Colors.greyV3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  plusCont: {
    width: Metrix.HorizontalSize(26),
    height: Metrix.VerticalSize(26),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.greyV3,
    backgroundColor: Colors.white,
  },

  profileCont: {
    width: Metrix.HorizontalSize(126),
    height: Metrix.VerticalSize(126),
    backgroundColor: '#D6DAE34D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: Metrix.VerticalSize(32),
  },
  cameraIcon: {
    width: 25,
    height: 25,
    borderRadius: 100,
    position: 'absolute',
    top: Metrix.VerticalSize(98),
    left: Metrix.HorizontalSize(93),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
