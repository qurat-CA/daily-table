import React from 'react';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type ScreenDataType = {
  title: string;
  description: string;
  WelcomeImg: React.FC<SvgProps>;
  bgColor: string;
  rotation: string;
  imgStyle: object;
  imgSize?: object;
};

export type ContainerProps = {
  pH?: number;
  children: React.ReactNode;
  headerTitle: string;
  headerSubText: string;
  backIcon?: boolean;
  contentContainerStyle?: Object;
};

export type FlexProps = {
  mT?: number;
  children: React.ReactNode;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: number;
};

export interface InputFieldProps {
  value: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur?: () => void;
  placeholder: string;
  secureTextEntry?: boolean;
  focused: boolean;
  iconActive: JSX.Element;
  iconInactive: JSX.Element;
  inputRef?: React.RefObject<TextInput>;
  isPassword?: boolean;
  autoFocus?: boolean;
  error?: string;
  inputStyle?: ViewStyle | TextStyle;
  rightBtn?: JSX.Element;
}
