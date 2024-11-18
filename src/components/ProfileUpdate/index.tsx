import {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Metrix, SVGS} from '../../config';
import BottomSheetComponent from '../BottomSheet';

const ProfileUpdate = () => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={Metrix.ActiveOpacity}
        style={styles.profileCont}>
        <SVGS.ProfieSvg />

        <LinearGradient
          colors={['#8052A0', '#55A0D7', '#85D3EB']}
          style={styles.cameraIcon}>
          <SVGS.CameraIcon />
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
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
