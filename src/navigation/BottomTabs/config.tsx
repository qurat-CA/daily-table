import {SVGS} from '../../config';
import {Home} from '../../container';

export const bottomTabConfig = {
  Home: {
    screenName: 'Home',
    component: Home,
    icon: () => {
      return <SVGS.EyeClose />;
    },
    iconGray: '1',
    headerShown: false,
    label: 'Home',
  },
};
