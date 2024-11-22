import {AppStackParamList} from '../config/type/navigation';

import {Home} from '../container';

export const AppStack: {
  name: keyof AppStackParamList;
  component: (props: any) => JSX.Element;
  key: string;
}[] = [
  {
    key: 'Home',
    component: Home,
    name: 'Home',
  },
];
