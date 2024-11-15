import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {InputFieldProps} from '../../config/type/appDataType';
import {Colors, Metrix, SVGS} from '../../config';
import styles, {gradientColors} from './styles';

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  focused,
  iconActive,
  iconInactive,
  isPassword = false,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <LinearGradient
      colors={focused ? gradientColors : [Colors.greyV2, Colors.greyV2]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradientWrapper}>
      <View style={styles.inputContainer}>
        {focused ? iconActive : iconInactive}
        <TextInput
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={focused ? Colors.pinkV2 : Colors.greyV2}
          secureTextEntry={isPassword && hidePassword}
        />
        {isPassword && (
          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => setHidePassword(!hidePassword)}>
            {hidePassword ? <SVGS.EyeClose /> : <SVGS.EyeOpen />}
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

export default InputField;
