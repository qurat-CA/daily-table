import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Flex, Typography} from '../index';
import {Colors, gradientColors, Metrix, SVGS} from '../../config';

const ImageUrl =
  'https://s3-alpha-sig.figma.com/img/461e/ab91/2248c9dd4260467a07427c1c7e751adb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hOeD~U-Kf3zc937a~jbxkmDUMxU4nd5WhPH1aQyC1kdsbQRmvPSKeWFwSX8pMQ3e10rpaGJqrO1-p0Ut5IYxHJbqCzMwcJlVJUpFSBfdgE4Z9L7rAToWEUfMBMyD02n66HJcBuKDRIxzW4qv1zFGxJW5OfTB~jJxKnx1asm2ZyM0tNgtLq8m1er5XXs7xvup3MZhHfHX20VFhJFvHRbP0hu8h35qv0axYB0quem4selxnGIEPGS1-tJRLyGckMOFtbHVtX4cKDatE2GZUhv7BFMrxtQtzQipeI~sXvp3TlVxvgBqfbQ5uT-gPNmH84ZKZ8NrbCChha2vUfmkPHvB3g__';

const UserHeader = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap={16}>
        <LinearGradient
          start={{x: 0.5, y: 1}}
          end={{x: 0.5, y: 0}}
          colors={gradientColors}
          style={styles.linearCont}>
          <View style={styles.profileCont}>
            <Image source={{uri: ImageUrl}} style={styles.imageStyle} />
          </View>
        </LinearGradient>

        <View>
          <Typography light size={12} color={Colors.lightgrey}>
            Good Morning 👋
          </Typography>

          <Typography mT={4} size={18} bold color={Colors.white}>
            Andrew Smith
          </Typography>
        </View>
      </Flex>

      <View style={styles.notificationCont}>
        <View style={styles.notificationBadge} />
        <SVGS.NotificationIcon />
      </View>
    </Flex>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  linearCont: {
    borderRadius: Metrix.Radius,
    padding: 1,
  },

  profileCont: {
    width: Metrix.HorizontalSize(50),
    height: Metrix.VerticalSize(50),
    borderRadius: Metrix.Radius,
  },

  imageStyle: {
    width: Metrix.HorizontalSize(50),
    height: Metrix.VerticalSize(50),
    borderRadius: Metrix.Radius,
  },

  notificationCont: {
    width: Metrix.HorizontalSize(36),
    height: Metrix.VerticalSize(36),
    borderRadius: Metrix.Radius,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationBadge: {
    width: Metrix.HorizontalSize(10),
    height: Metrix.HorizontalSize(10),
    backgroundColor: Colors.pinkV2,
    position: 'absolute',
    top: Metrix.VerticalSize(5.5),
    right: Metrix.HorizontalSize(9),
    borderWidth: Metrix.HorizontalSize(2),
    borderColor: Colors.white,
    borderRadius: 50,
    zIndex: 2,
  },
});
