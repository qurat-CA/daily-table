import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import {Colors, Images, Metrix} from '../../config';

export type ContainerProps = {
  pH?: number;
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  backIcon?: boolean;
  contentContainerStyle?: Object;
};

const AppContainer: React.FC<ContainerProps> = ({
  headerChildren,
  children,
  pH = 24,
  contentContainerStyle,
}) => {
  return (
    <ImageBackground
      source={Images.AppBackgroundImage}
      style={styles.imageBackground}>
      <View style={styles.headerContainer}>{headerChildren}</View>

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
    // marginTop: Metrix.VerticalSize(16),
    marginBottom: Metrix.VerticalSize(24),
    marginHorizontal: Metrix.HorizontalSize(24),
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: Metrix.VerticalSize(40),
    borderTopLeftRadius: Metrix.VerticalSize(40),
  },
});

export default AppContainer;
