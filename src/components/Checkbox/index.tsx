import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {Metrix, SVGS} from '../../config';
import {useState} from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <TouchableOpacity
      activeOpacity={Metrix.ActiveOpacity}
      style={styles.container}
      onPress={() => setChecked(!checked)}>
      {checked && (
        <SVGS.TickSvg width={10} height={10} stroke={'#000'} fill={'#000'} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    width: Metrix.HorizontalSize(19),
    height: Metrix.VerticalSize(19),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Metrix.HorizontalSize(1),
    backgroundColor: '#F9F9F9',
    borderColor: '#CDCDCD',
    borderRadius: 6,
  },
});
