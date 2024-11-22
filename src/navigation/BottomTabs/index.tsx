import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import styles from './styles';
import {bottomTabConfig} from './config';
import {Typography} from '../../components';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  function MyTabBar({state, descriptors, navigation}: any) {
    console.log(state.index);
    return (
      <View style={styles.tabOuterContainer}>
        {state?.routes?.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            console.log('descriptors');
          };

          return (
            <Typography
              color={isFocused ? '#55A0D7' : '#CACACA'}
              onPress={onPress}
              key={route.key}>
              {label}
            </Typography>
          );
        })}
      </View>
    );
  }
  return (
    <HomeTabNavigation.Navigator tabBar={props => <MyTabBar {...props} />}>
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Home.screenName}
        component={bottomTabConfig.Home.component}
      />
    </HomeTabNavigation.Navigator>
  );
};

export default HomeTabs;
