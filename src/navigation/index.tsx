import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../config/type/navigation';
import {AuthStack} from './AuthStack';
import {Easing} from 'react-native';

const MainStackNavigator = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  const AppStacks: {
    name: keyof RootStackParamList;
    component: (props: any) => JSX.Element;
    key: string;
  }[] = [...AuthStack];

  return (
    <MainStackNavigator.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: ({current, layouts}) => {
          const translateX = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          });

          const opacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          });

          return {
            cardStyle: {
              transform: [{translateX}],
              opacity,
            },
          };
        },
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.in(Easing.ease),
            },
          },
          close: {
            animation: 'timing',
            config: {
              duration: 300,
              easing: Easing.in(Easing.ease),
            },
          },
        },
      }}>
      {AppStacks.map(stack => (
        <MainStackNavigator.Screen {...stack} />
      ))}
    </MainStackNavigator.Navigator>
  );
};
