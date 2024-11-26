import {AppStackParamList} from '../config/type/navigation';

import {AddChild, Home, SelectAvatar} from '../container';
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
  {
    key: 'AddChild',
    component: AddChild,
    name: 'AddChild',
  },
  {
    key: 'SelectAvatar',
    component: SelectAvatar,
    name: 'SelectAvatar',
  },
];
