import {StyleSheet, Text, TouchableOpacity} from 'react-native';
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
};

const StandardButton = ({
  title,
  onPress,
  bgColor = 'lightgreen',
  useLinearGradient = false,
  gradientColors = ['#8052A0', '#55A0D7'],
  textColor = '#000',
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Metrix.ActiveOpacity}
      style={styles.container}>
      {useLinearGradient ? (
        <LinearGradient
          start={{x: 0.3, y: 0}}
          end={{x: 0.7, y: 1}}
          colors={gradientColors}
          style={styles.linearGradient}>
          <Typography color={textColor} letterSpacing={0.2}>
            {title}
          </Typography>
        </LinearGradient>
      ) : (
        <Text style={[styles.buttonText, {backgroundColor: bgColor}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: Metrix.Radius,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrix.Radius,
    paddingVertical: Metrix.VerticalSize(15),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Metrix.FontMedium,
    color: '#000',
    paddingVertical: Metrix.VerticalSize(15),
  },
});
