import {Colors} from '../../config/color';
import {SVGS} from '../../config/images';

export const SCREEN_DATA = [
  {
    title: 'Welcome to the App!',
    description: 'Here is a short description of what the app does.',
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
