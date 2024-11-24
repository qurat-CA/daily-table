import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {bottomTabConfig} from './config';
import {Typography} from '../../components';
import {Colors, Metrix} from '../../config';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  function MyTabBar({state, descriptors, navigation}: any) {
    const circlePosition = useSharedValue(0);
    const fadeOpacity = useSharedValue(0); // Shared value for opacity

    const animateCircle = (position: number) => {
      circlePosition.value = withTiming(position, {
        duration: 300,
      });
    };

    const fadeIn = () => {
      fadeOpacity.value = withTiming(1, {
        duration: 300,
      });
    };

    const fadeOut = () => {
      fadeOpacity.value = withTiming(0, {
        duration: 300,
      });
    };

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
              animateCircle(Metrix.VerticalSize(-30));
              // fadeOut();
              navigation.navigate(route.name);
            }
          };

          if (isFocused) {
            animateCircle(45);
            fadeIn();
          }

          const animatedCircleStyle = useAnimatedStyle(() => ({
            bottom: circlePosition.value,
          }));

          const animatedFadeStyle = useAnimatedStyle(() => ({
            opacity: fadeOpacity.value,
          }));

          return (
            <TouchableOpacity
              key={Math?.random()}
              accessibilityRole="button"
              activeOpacity={Metrix.ActiveOpacity}
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                paddingBottom: 10,
                alignItems: 'center',
              }}
              onPress={onPress}>
              {!isFocused && bottomTabConfig[label]?.icon(isFocused)}
              <Typography
                mT={5}
                size={12}
                color={isFocused ? Colors.purpleV2 : '#9DB2CE'}>
                {label}
              </Typography>

              {/* View with white background */}
              {isFocused && (
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      width: Metrix.HorizontalSize(60),
                      height: Metrix.VerticalSize(60),
                      top: 0,
                      zIndex: -2,
                      // backgroundColor: 'pink',
                    },
                    animatedFadeStyle, // Apply fade animation
                  ]}>
                  <View style={{position: 'relative'}}>
                    <View
                      style={{
                        backgroundColor: Colors.primary,
                        width: 30,
                        height: 30,
                        borderRadius: 50,
                        position:"absolute",
                        borderWidth:6,
                        borderLeftColor: Colors.primary,
                        borderColor:"#fff",
                        top: -6,
                        left:-25
                      }}
                    />
                    <View
                      style={{
                        width: Metrix.HorizontalSize(60),
                        height: Metrix.VerticalSize(60),
                        top: -20,
                        // bottom: -30,
                        left: 0,
                        position: 'absolute',
                        backgroundColor: Colors.white,
                        borderRadius: 100,
                        zIndex: -99,
                      }}></View>
                  </View>
                </Animated.View>
              )}

              {/* Animated Circle */}
              {isFocused && (
                <Animated.View
                  style={[
                    {
                      width: Metrix.HorizontalSize(54),
                      height: Metrix.VerticalSize(54),
                      position: 'absolute',
                      backgroundColor: Colors.primary,
                      borderRadius: 100,
                      zIndex: -2,
                    },
                    animatedCircleStyle, // Circle animation
                    animatedFadeStyle, // Apply fade animation
                  ]}
                />
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
