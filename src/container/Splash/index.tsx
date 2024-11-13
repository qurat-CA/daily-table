import {useEffect} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SVGS} from '../../config/images';
import styles from './style';
import {NavigationService} from '../../config';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('Welcome', {});
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/dummy-bg.png')}
      style={styles.container}>
      <SVGS.Logo width={208} height={191} />
      <View style={styles.text}>
        <SVGS.AppNameText />
      </View>
    </ImageBackground>
  );
};

export default Splash;
