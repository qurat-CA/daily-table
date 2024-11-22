import {useEffect} from 'react';
import {ImageBackground, View} from 'react-native';

import {Images, SVGS} from '../../config/images';
import {NavigationService} from '../../config';
import AuthStore from '../../store/auth';
import styles from './style';

const Splash = () => {
  const {email} = AuthStore.user();

  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate(email ? 'Home' : 'Welcome', {});
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
