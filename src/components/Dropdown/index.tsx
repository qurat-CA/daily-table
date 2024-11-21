import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-element-dropdown';

import {Colors, Metrix} from '../../config';
import {Typography} from '../index';
import {gradientColors} from '../InputField/styles';
import styles from './style';

interface DropdownItem {
  label: string;
  value: string;
}
interface DropdownComponentProps {
  data: DropdownItem[];
  placeholder?: string;
  mT?: number;
  mB?: number;
  error?: string;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  data,
  mT = 0,
  mB = 0,
  placeholder = 'Select Item',
  error,
}) => {
  const [value, setValue] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <LinearGradient
        colors={isFocus ? gradientColors : [Colors.greyV2, Colors.greyV2]}
        start={{x: 0.5, y: 1}}
        end={{x: 0.5, y: 0}}
        style={[
          styles.gradientWrapper,
          {marginTop: Metrix.VerticalSize(mT), marginBottom: mB},
        ]}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: Colors.purpleV2}]}
          placeholderStyle={[
            styles.placeholderStyle,
            {color: isFocus ? Colors.purpleV2 : Colors.greyV2},
          ]}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </LinearGradient>

      {error && (
        <Typography mT={12} letterSpacing={0.2} size={12} color={Colors.danger}>
          {error}
        </Typography>
      )}
    </>
  );
};

export default DropdownComponent;
