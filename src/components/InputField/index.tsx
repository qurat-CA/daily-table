import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {InputFieldProps} from '../../config/type/appDataType';
import {Colors, Metrix, SVGS} from '../../config';
import styles, {gradientColors} from './styles';
import Typography from '../Typography';

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
  inputRef,
  error,
  inputStyle,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <>
      <LinearGradient
        colors={focused ? gradientColors : [Colors.greyV2, Colors.greyV2]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.gradientWrapper}>
        <View style={styles.inputContainer}>
          {focused ? iconActive : iconInactive}
          <TextInput
            ref={inputRef}
            onChangeText={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            style={[
              styles.input,
              {color: focused ? Colors.purpleV2 : Colors.text},
              {fontSize: Metrix.FontSmall},
              inputStyle,
            ]}
            placeholder={placeholder}
            placeholderTextColor={focused ? Colors.pinkV2 : Colors.greyV2}
            secureTextEntry={isPassword && hidePassword}
          />
          {isPassword && (
            <TouchableOpacity
              activeOpacity={Metrix.ActiveOpacity}
              onPress={() => setHidePassword(!hidePassword)}>
              {hidePassword ? (
                focused ? (
                  <SVGS.EyeCloseFocus />
                ) : (
                  <SVGS.EyeClose />
                )
              ) : focused ? (
                <SVGS.EyeOpenFocus />
              ) : (
                <SVGS.EyeOpen />
              )}
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      {error && (
        <Typography mT={12} letterSpacing={0.2} size={12} color={Colors.danger}>
          {error}
        </Typography>
      )}
    </>
  );
};

export default InputField;
