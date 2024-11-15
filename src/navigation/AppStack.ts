import {AppStackParamList} from '../config/type/navigation';
import {Home, SelectRole, Signin} from '../container';

export const AppStack: {
  name: keyof AppStackParamList;
  component: (props: any) => JSX.Element;
  key: string;
}[] = [
  {
    key: 'SelectRole',
    component: SelectRole,
    name: 'SelectRole',
  },
  {
    key: 'Home',
    component: Home,
    name: 'Home',
  },
  {
    key: 'Signin',
    component: Signin,
    name: 'Signin',
  },
];
