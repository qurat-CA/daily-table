import {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Dimensions, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppIntroSlider from 'react-native-app-intro-slider';

import {SCREEN_DATA} from './data';
import {Colors} from '../../config/color';
import {Metrix, NavigationService} from '../../config';
import styles from './style';
import StandardButton from '../../components/button';
import Typography from '../../components/Typography';

const {width} = Dimensions.get('window');

const IntroSlider = () => {
  const [scrollX, setScrollX] = useState(0);
  const navigation = useNavigation();
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const renderItem = ({item}: any) => {
    return (
      <Animated.View style={{flex: 1, opacity: fadeAnim}}>
        <ImageBackground
          source={require('../../assets/images/dummy-bg.png')}
          style={{flex: 1}}>
          <ImageBackground
            source={require('../../assets/images/half-circle.png')}
            style={{height: Metrix.VerticalSize(500), overflow: 'hidden'}}>
            <SafeAreaView>
              <View style={styles.skipBtn}>
                <StandardButton
                  onPress={() => {}}
                  title="Skip"
                  bgColor={Colors.pink}
                />
              </View>
              <View
                style={[
                  styles.rectangle,
                  {
                    backgroundColor: item.bgColor,
                    transform: [{rotate: item.rotation}],
                  },
                ]}
              />
              <View style={{zIndex: 2}}>
                <item.WelcomeImg width={370} height={330} />
              </View>
            </SafeAreaView>
          </ImageBackground>
          <View style={styles.textCont}>
            <Typography>{item.title}</Typography>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </ImageBackground>
      </Animated.View>
    );
  };

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    setScrollX(contentOffsetX);
  };

  const onSlideChange = (index: number) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 500);
  };

  const onDone = () => {
    NavigationService.navigate('Environment', {});
  };

  return (
    <AppIntroSlider
      onScroll={onScroll}
      renderItem={renderItem}
      data={SCREEN_DATA}
      onDone={onDone}
      showSkipButton={false}
      showDoneButton={false}
      showNextButton={false}
      onSkip={onDone}
      onSlideChange={index => {
        onSlideChange(index);
      }}
      activeDotStyle={{
        backgroundColor: Colors.blue,
        width: Metrix.HorizontalSize(33),
        height: Metrix.VerticalSize(8),
        borderRadius: 5,
      }}
      dotStyle={{
        backgroundColor: '#D9D9D9',
        width: Metrix.HorizontalSize(8),
        height: Metrix.VerticalSize(8),
        borderRadius: 5,
      }}
    />
  );
};

export default IntroSlider;
