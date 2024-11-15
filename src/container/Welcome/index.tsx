import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {Metrix, NavigationService, Images, Colors} from '../../config';
import {ScreenDataType} from '../../config/type/appDataType';
import {StandardButton, Typography} from '../../components';
import {SCREEN_DATA} from './data';
import styles from './style';

type RenderItemType = {
  item: ScreenDataType;
  index: number;
};

const IntroSlider = () => {
  const renderTitle = (title: string, index: number) => {
    if (index === 0) {
      return (
        <Text>
          <Text style={{color: Colors.blue}}>Welcome To </Text>
          <Text style={{color: Colors.pinkV2}}>Daily Tables</Text>
        </Text>
      );
    } else if (index === 1) {
      return (
        <Text>
          <Text style={{color: Colors.blue}}>The Ultimate </Text>
          <Text style={{color: Colors.pinkV2}}>Trivia </Text>
          <Text style={{color: Colors.blue}}>Challenge</Text>
        </Text>
      );
    } else if (index === 2) {
      return (
        <Text>
          <Text style={{color: Colors.blue}}>Test Your Knowledge </Text>
          <Text style={{color: Colors.pinkV2}}>With Daily Tables</Text>
        </Text>
      );
    }
    return title;
  };

  const renderItem = ({item, index}: RenderItemType) => {
    return (
      <ImageBackground source={Images.AppBackgroundImage} style={{flex: 1}}>
        <ImageBackground source={Images.HalfCircle} style={styles.halfCircle}>
          <View
            style={[
              styles.rectangle,
              {
                backgroundColor: item.bgColor,
                transform: [{rotate: item.rotation}],
              },
            ]}
          />

          <View style={styles.skipBtn}>
            <StandardButton
              onPress={() => {}}
              title="Skip"
              bgColor={Colors.pink}
              textSize={15}
            />
          </View>

          <View style={[styles.imgContainer, {...item.imgStyle}]}>
            <item.WelcomeImg
              width={Metrix.VerticalSize(365)}
              height={Metrix.VerticalSize(365)}
            />
          </View>
        </ImageBackground>

        <View style={styles.contentCont}>
          <Typography lineHeight={30} size={25} bold textAlign="center">
            {renderTitle(item.title, index)}
          </Typography>

          <Typography
            color={Colors.white}
            mT={20}
            size={12}
            textAlign="center"
            lineHeight={18}>
            {item.description}
          </Typography>
        </View>
      </ImageBackground>
    );
  };

  const onDone = () => {
    NavigationService.navigate('Environment', {});
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={SCREEN_DATA}
      onDone={onDone}
      showSkipButton={false}
      showDoneButton={false}
      showNextButton={false}
      onSkip={onDone}
      activeDotStyle={styles.activeDotStyle}
      dotStyle={styles.dotStyle}
    />
  );
};

export default IntroSlider;
