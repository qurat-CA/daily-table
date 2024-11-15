import React from 'react';
import {TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {InputFieldProps} from '../../config/type/appDataType';
import {Colors} from '../../config';
import styles, {gradientColors} from './styles';

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  secureTextEntry = false,
  focused,
  iconActive,
  iconInactive,
  isPassword = false,
}) => {
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
          secureTextEntry={secureTextEntry}
        />
      </View>
    </LinearGradient>
  );
};

export default InputField;
