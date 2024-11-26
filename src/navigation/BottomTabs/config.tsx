import {Colors} from '../../config';
import {TAB_SVGS} from '../../config/images';
import {Home, MoneyPot, Profile, Quizzes} from '../../container';

type BottomTabConfigType = {
  [key: string]: {
    screenName: string;
    component: any;
    icon: (isFocused: boolean) => JSX.Element;
    iconGray: string;
    headerShown: boolean;
    label: string;
    ActiveIcon: JSX.Element;
  };
};

export const bottomTabConfig: BottomTabConfigType = {
  Home: {
    screenName: 'Home',
    component: Home,
    icon: (isFocused: boolean) => {
      return (
        <TAB_SVGS.HomeTab stroke={isFocused ? Colors.purpleV2 : Colors.black} />
      );
    },
    iconGray: '1',
    headerShown: false,
    label: 'Home',
    ActiveIcon: <TAB_SVGS.HomeTabActive />,
  },
  Quizzes: {
    screenName: 'Quizzes',
    component: Quizzes,
    icon: () => {
      return <TAB_SVGS.QuizzesTab />;
    },
    iconGray: '1',
    headerShown: false,
    label: 'Quizzes',
    ActiveIcon: <TAB_SVGS.RewardsTabActive />,
  },
  MoneyPot: {
    screenName: 'MoneyPot',
    component: MoneyPot,
    icon: () => {
      return <TAB_SVGS.MoneyPotTab />;
    },
    iconGray: '1',
    headerShown: false,
    label: 'MoneyPot',
    ActiveIcon: <TAB_SVGS.MoneyPotActive />,
  },
  Profile: {
    screenName: 'Profile',
    component: Profile,
    icon: () => {
      return <TAB_SVGS.ProfileTab />;
    },
    iconGray: '1',
    headerShown: false,
    label: 'Profile',
    ActiveIcon: <TAB_SVGS.ProfileTabActive width={24} height={24} />,
  },
};
