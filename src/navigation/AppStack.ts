import {AppStackParamList} from '../config/type/navigation';

import {Home} from '../container';
import HomeTabs from './BottomTabs';

export const AppStack: {
  name: keyof AppStackParamList;
  component: (props: any) => JSX.Element;
  key: string;
}[] = [
  {
    key: 'HomeTabs',
    component: HomeTabs,
    name: 'HomeTabs',
  },
  {
    key: 'Home',
    component: Home,
    name: 'Home',
  },
];
