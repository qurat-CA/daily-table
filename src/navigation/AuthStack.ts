import {RootStackParamList} from '../config/type/navigation';
import {
  ChangePassword,
  Environment,
  ForgotPassword,
  Signin,
  Signup,
  Splash,
  Verification,
  Welcome,
} from '../container';

export const AuthStack: {
  name: keyof RootStackParamList;
  component: (props: any) => JSX.Element;
  key: string;
}[] = [
  {
    key: 'Splash',
    component: Splash,
    name: 'Splash',
  },
  {
    key: 'Environment',
    component: Environment,
    name: 'Environment',
  },
  {
    key: 'ChangePassword',
    component: ChangePassword,
    name: 'ChangePassword',
  },
  {
    key: 'ForgotPassword',
    component: ForgotPassword,
    name: 'ForgotPassword',
  },
  {
    key: 'Signin',
    component: Signin,
    name: 'Signin',
  },
  {
    key: 'Signup',
    component: Signup,
    name: 'Signup',
  },
  {
    key: 'Verification',
    component: Verification,
    name: 'Verification',
  },
  {
    key: 'Welcome',
    component: Welcome,
    name: 'Welcome',
  },
];
