import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Environment: undefined;
  Signin: {role: string};
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
  Signin: {role: string};
};

type SigninScreenRouteProp = RouteProp<RootStackParamList, 'Signin'>;

export type SigninProps = {
  route: SigninScreenRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'Signin'>;
};

export type NavigationStackType<T extends ParamListBase = RootStackParamList> =
  StackNavigationProp<T>;
