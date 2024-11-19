import React, {useCallback} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Images, Metrix, NavigationService, SVGS} from '../../config';
import {Typography} from '../index';
import {ContainerProps} from '../../config/type/appDataType';

const Container: React.FC<ContainerProps> = ({
  children,
  pH = 24,
  headerTitle,
  headerSubText,
  backIcon = false,
  contentContainerStyle,
}) => {
  const handleBackPress = useCallback(() => {
    NavigationService.goBack();
  }, []);

  return (
    <ImageBackground
      source={Images.AppBackgroundImage}
      style={styles.imageBackground}>
      <View
        style={[styles.headerContainer, backIcon && styles.backIconContainer]}>
        {!backIcon ? (
          <SVGS.Logo
            width={Metrix.HorizontalSize(77)}
            height={Metrix.VerticalSize(70)}
          />
        ) : (
          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={handleBackPress}
            style={styles.backButton}>
            <SVGS.BackIcon
              width={Metrix.HorizontalSize(24)}
              height={Metrix.VerticalSize(22)}
            />
          </TouchableOpacity>
        )}

        <Typography mT={20} color={Colors.white} size={23} bold>
          {headerTitle}
        </Typography>

        {headerSubText && (
          <Typography mT={2} lineHeight={24} color={Colors.white}>
            {headerSubText}
          </Typography>
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        style={[
          styles.contentContainer,
          {paddingHorizontal: Metrix.HorizontalSize(pH)},
        ]}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  headerContainer: {
    marginTop: Metrix.VerticalSize(100),
    marginBottom: Metrix.VerticalSize(24),
    marginHorizontal: Metrix.HorizontalSize(24),
  },
  backIconContainer: {
    marginTop: Metrix.VerticalSize(70),
  },
  backButton: {
    marginBottom: Metrix.VerticalSize(50),
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: Metrix.VerticalSize(40),
    borderTopLeftRadius: Metrix.VerticalSize(40),
  },
});

export default Container;
