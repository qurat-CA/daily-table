import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Metrix, SVGS} from '../../config';

type ProfileUpdateProps = {
  onPress: () => void;
  imageUri?: string;
};

const ProfileUpdate = ({onPress, imageUri}: ProfileUpdateProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={Metrix.ActiveOpacity}
        style={styles.profileCont}
        onPress={onPress}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.profileImage} />
        ) : (
          <SVGS.ProfieSvg />
        )}

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
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
});
