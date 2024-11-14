import {Metrix} from '../../config';
import {Colors} from '../../config/color';
import {SVGS} from '../../config/images';
import {ScreenDataType} from '../../config/type/appDataType';

export const SCREEN_DATA: ScreenDataType[] = [
  {
    title: 'Welcome To Daily Tables',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    WelcomeImg: SVGS.Welcome1,
    bgColor: Colors.purple,
    rotation: '156deg',
    imgStyle: {
      top: Metrix.VerticalSize(105),
      left: Metrix.HorizontalSize(50),
    },
  },
  {
    title: 'The Ultimate Trivia Challenge',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    WelcomeImg: SVGS.Welcome2,
    bgColor: Colors.blue,
    rotation: '23deg',
    imgStyle: {
      top: Metrix.VerticalSize(125),
      right: Metrix.HorizontalSize(35),
    },
  },
  {
    title: 'Test Your knowledge With Daily Tables',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    WelcomeImg: SVGS.Welcome3,
    bgColor: Colors.purple,
    rotation: '156deg',
    imgStyle: {
      top: Metrix.VerticalSize(110),
      left: Metrix.HorizontalSize(55),
    },
  },
];
