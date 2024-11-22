import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {bottomTabConfig} from './config';
import {Typography} from '../../components';
import {Colors, Metrix} from '../../config';
import styles from './styles';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  function MyTabBar({state, descriptors, navigation}: any) {
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
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={Math?.random()}
              accessibilityRole="button"
              activeOpacity={Metrix.ActiveOpacity}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={onPress}>
              {bottomTabConfig[label]?.icon(isFocused)}
              <Typography
                mT={5}
                size={12}
                color={isFocused ? Colors.purpleV2 : '#9DB2CE'}>
                {label}
              </Typography>

              {isFocused && (
                <View
                  style={{
                    width: Metrix.HorizontalSize(54),
                    height: Metrix.VerticalSize(54),
                    position: 'absolute',
                    backgroundColor: 'pink',
                    borderRadius: 100,
                    bottom: Metrix.VerticalSize(46),
                  }}></View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  return (
    <HomeTabNavigation.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Home.screenName}
        component={bottomTabConfig.Home.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Quizzes.screenName}
        component={bottomTabConfig.Quizzes.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.MoneyPot.screenName}
        component={bottomTabConfig.MoneyPot.component}
      />
      <HomeTabNavigation.Screen
        name={bottomTabConfig.Profile.screenName}
        component={bottomTabConfig.Profile.component}
      />
    </HomeTabNavigation.Navigator>
  );
};

export default HomeTabs;
