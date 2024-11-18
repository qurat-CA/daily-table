import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Metrix} from '../../config';
import {Typography} from '../index';

type Props = {
  title: string;
  onPress: () => void;
  bgColor?: string;
  useLinearGradient?: boolean;
  gradientColors?: string[];
  textColor?: string;
  textSize?: number;
  mT?: number;
  style?: object;
};

const StandardButton = ({
  title,
  onPress,
  useLinearGradient = false,
  gradientColors = ['#8052A0', '#55A0D7'],
  textColor = '#fff',
  textSize = 16,
  mT = 0,
  bgColor = '#55A0D7',
  style = {},
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Metrix.ActiveOpacity}
      style={[
        styles.container,
        !useLinearGradient && {
          backgroundColor: bgColor,
          paddingVertical: Metrix.VerticalSize(8),
          borderRadius: Metrix.Radius,
        },
        {marginTop: Metrix.VerticalSize(mT)},
        style,
      ]}>
      {useLinearGradient ? (
        <LinearGradient
          start={{x: 0.4, y: 0}}
          end={{x: 0.7, y: 1}}
          colors={gradientColors}
          style={styles.linearGradient}>
          <Typography semiBold color={textColor} letterSpacing={0.2}>
            {title}
          </Typography>
        </LinearGradient>
      ) : (
        <Typography medium textAlign="center" color={textColor} size={textSize}>
          {title}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrix.Radius,
    paddingVertical: Metrix.VerticalSize(15),
  },
});
