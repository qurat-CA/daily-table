import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Metrix} from '../../config';

type Props = {
  title: string;
  onPress: () => void;
  bgColor?: string;
};

const StandardButton = ({title, onPress, bgColor = 'lightgreen'}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={Metrix.ActiveOpacity}
      style={[styles.container, {backgroundColor: bgColor}]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrix.VerticalSize(50),
    borderRadius: Metrix.Radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrix.HorizontalSize(300),
    marginVertical: 10,
  },
  circle: {
    height: Metrix.VerticalSize(20),
    width: Metrix.VerticalSize(20),
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  itemText: {
    fontSize: Metrix.FontMedium,
    marginLeft: Metrix.HorizontalSize(50),
  },
  selected: {
    backgroundColor: 'red',
  },
});
