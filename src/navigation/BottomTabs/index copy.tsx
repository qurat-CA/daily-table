import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {GradientText, Typography} from '../../components';
import {bottomTabConfig} from './config';
import {Colors, Metrix} from '../../config';
import {gradientColors} from '../../components/InputField/styles';
import styles from './styles';

const HomeTabNavigation = createBottomTabNavigator();

const HomeTabs = () => {
  function MyTabBar({state, descriptors, navigation}: any) {
    const circlePosition = useSharedValue(0);
    const fadeOpacity = useSharedValue(0);

    const animateCircle = (position: number) => {
      circlePosition.value = withTiming(position, {
        duration: 150,
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
              fadeOut();
              navigation.navigate(route.name);
            }
          };

          if (isFocused) {
            animateCircle(40);
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
              style={styles.tabContainer}
              onPress={onPress}>
              {!isFocused && bottomTabConfig[label]?.icon(isFocused)}

              {isFocused ? (
                <GradientText
                  colors={gradientColors}
                  style={{fontSize: 12, fontWeight: 'bold'}}>
                  {label}
                </GradientText>
              ) : (
                <Typography
                  mT={5}
                  size={12}
                  color={isFocused ? Colors.purpleV2 : '#9DB2CE'}>
                  {label}
                </Typography>
              )}

              {isFocused && (
                <Animated.View
                  style={[
                    {
                      position: 'absolute',
                      height: Metrix.VerticalSize(56),
                      top: 0,
                      zIndex: -2,
                    },
                    animatedFadeStyle,
                  ]}>
                  {/* <View
                    style={{
                      backgroundColor: Colors.primary,
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      position: 'absolute',
                      borderWidth: 6,
                      borderColor: Colors.primary,
                      top: Metrix.VerticalSize(-2),
                      left: Metrix.HorizontalSize(-26),
                    }}
                  /> */}
                  <View style={{position: 'relative'}}>
                    <View style={styles.animatedWhiteBGCircle} />
                  </View>
                </Animated.View>
              )}

              {isFocused && (
                <Animated.View
                  style={[
                    styles.animatedCircle,
                    animatedCircleStyle,
                    animatedFadeStyle,
                  ]}>
                  {bottomTabConfig[label]?.ActiveIcon}
                </Animated.View>
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
