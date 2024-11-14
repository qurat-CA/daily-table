import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Environment: undefined;
  Signin: undefined;
  ChangePassword: undefined;
  ForgotPassword: undefined;
  Verification: undefined;
  Signup: undefined;
  Welcome: undefined;
  SelectRole: undefined;
};

export type AppStackParamList = {
  SelectRole: undefined;
  Home: undefined;
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;
