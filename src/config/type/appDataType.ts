import React from 'react';
import {TextInput} from 'react-native';
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
  headerTitle: string;
  headerSubText: string;
};

export type FlexProps = {
  mT?: number;
  children: React.ReactNode;
  justifyContent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
};

export interface InputFieldProps {
  value: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  secureTextEntry?: boolean;
  focused: boolean;
  iconActive: JSX.Element;
  iconInactive: JSX.Element;
  inputRef: React.RefObject<TextInput>;
  isPassword?: boolean;
}
