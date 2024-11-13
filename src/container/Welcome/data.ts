import {Colors} from '../../config/color';
import {SVGS} from '../../config/images';
import {ImageSourcePropType} from 'react-native'; // Importing the type for image source prop
import {ScreenDataType} from '../../config/type/appDataType';

export const SCREEN_DATA: ScreenDataType[] = [
  {
    title: 'Welcome To Daily Tables',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    bgImage: require('../../assets/images/dummy-bg.jpg'),
    WelcomeImg: SVGS.Welcome1,
    bgColor: Colors.purple,
    rotation: '23deg',
  },
  {
    title: 'Stay Connected',
    description: 'Connect with your friends and family.',
    bgImage: require('../../assets/images/dummy-bg.jpg'),
    WelcomeImg: SVGS.Welcome2,
    bgColor: Colors.blue,
    rotation: '156deg',
  },
  {
    title: 'Get Started!',
    description: 'Start using the app now.',
    bgImage: require('../../assets/images/dummy-bg.jpg'),
    WelcomeImg: SVGS.Welcome3,
    bgColor: Colors.purple,
    rotation: '23deg',
  },
];
