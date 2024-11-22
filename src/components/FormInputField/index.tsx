import {View} from 'react-native';
import Typography from '../Typography';
import InputField from '../InputField';
import styles from './styles';

export const FormInputField = ({
  label,
  value,
  onChange,
  onFocus,
  placeholder,
  focused,
  iconActive,
  iconInactive,
  error,
  isPassword = false,
}: any) => (
  <View style={styles.nameCont}>
    <Typography semiBold mT={20} mB={10}>
      {label}
    </Typography>
    <InputField
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      focused={focused}
      iconActive={iconActive}
      iconInactive={iconInactive}
      error={error}
      isPassword={isPassword}
    />
  </View>
);
