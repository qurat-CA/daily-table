import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {Colors, Images, Metrix, SVGS} from '../../config';
import {Typography} from '../index';
import {ContainerProps} from '../../config/type/appDataType';

const Container: React.FC<ContainerProps> = ({
  children,
  pH = 24,
  headerTitle,
  headerSubText,
}) => {
  return (
    <ImageBackground source={Images.AppBackgroundImage} style={{flex: 1}}>
      <View style={styles.logoCont}>
        <SVGS.Logo
          width={Metrix.HorizontalSize(77)}
          height={Metrix.VerticalSize(70)}
        />

        <Typography mT={20} color={Colors.white} size={23} bold>
          {headerTitle}
        </Typography>

        <Typography mT={2} color={Colors.white}>
          {headerSubText}
        </Typography>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.contentCont,
          {paddingHorizontal: Metrix.HorizontalSize(pH)},
        ]}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default Container;

const styles = StyleSheet.create({
  logoCont: {
    marginTop: Metrix.VerticalSize(100),
    marginBottom: Metrix.VerticalSize(24),
    marginHorizontal: Metrix.HorizontalSize(24),
  },
  contentCont: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: Metrix.VerticalSize(40),
    borderTopLeftRadius: Metrix.VerticalSize(40),
  },
});
