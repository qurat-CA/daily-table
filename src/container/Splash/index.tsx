import {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';

import {Images, SVGS} from '../../config/images';
import {NavigationService} from '../../config';
import styles from './style';

const Splash = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('Welcome', {});
    }, 2000);
  }, []);

  return (
    <ImageBackground
      source={Images.AppBackgroundImage}
      style={styles.container}>
      <SVGS.Logo width={208} height={191} />
      <SVGS.AppNameText />
    </ImageBackground>
  );
};

export default Splash;
