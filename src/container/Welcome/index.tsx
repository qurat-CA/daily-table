import {View, Text, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import {SCREEN_DATA} from './data';
import {Metrix, NavigationService, Images, Colors} from '../../config';
import {ScreenDataType} from '../../config/type/appDataType';
import {StandardButton, Typography} from '../../components';
import styles from './style';

type RenderItemType = {
  item: ScreenDataType;
  index: number;
};

const IntroSlider = () => {
  const renderItem = ({item, index}: RenderItemType) => {
    return (
      <ImageBackground source={Images.AppBackgroundImage} style={{flex: 1}}>
        <ImageBackground
          source={Images.HalfCircle}
          style={{
            height: Metrix.VerticalSize(516),
            overflow: 'hidden',
          }}>
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

          <View style={{zIndex: 2, overflow: 'hidden'}}>
            <item.WelcomeImg width={365} height={365} />
          </View>
        </ImageBackground>

        <View style={styles.textCont}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Typography size={25} bold color={Colors.blue} textAlign="center">
              Welcome To
            </Typography>
            <Typography size={25} bold textAlign="center" color="#EC1A73">
              {' '}
              Daily Tables
            </Typography>
          </View>
          <Typography
            color={Colors.white}
            mT={20}
            size={12}
            textAlign="center"
            lineHeight={24}>
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
