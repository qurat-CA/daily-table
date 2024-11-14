import React from 'react';
import {SvgProps} from 'react-native-svg';

export type ScreenDataType = {
  title: string;
  description: string;
  WelcomeImg: React.FC<SvgProps>;
  bgColor: string;
  rotation: string;
  imgStyle: object;
};

export type ContainerProps = {
  pH?: number;
  children: React.ReactNode;
};
