import {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {object, string} from 'yup';

import {SigninProps} from '../../config/type/navigation';
import {
  Checkbox,
  Container,
  Flex,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {Colors, Metrix, NavigationService, SVGS} from '../../config';
import styles from './style';

const Signin = ({route}: SigninProps) => {
  const {role} = route?.params;

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const initialValues: {email: string; password: string} = {
    email: '',
    password: '',
  };

  const validationSchema = object({
    email: string().email('Enter a valid email').required('Email is required'),
    password: string()
      .min(6, 'Password must contain min 8 characters')
      .required('Password is required'),
  });

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const onPressRegister = () => {
    if (role === 'parent') {
      NavigationService.navigate('Signup', {role});
    } else {
      NavigationService.navigate('SignupAsChild', {role});
    }
  };

  useEffect(() => {
    setFocusedField('email');
  }, []);

  return (
    <Container
      contentContainerStyle={{flex: 1}}
      headerTitle={`Welcome ${role.charAt(0).toUpperCase() + role.slice(1)} 👋`}
      headerSubText="Let’s Get You Started Sign In To Continue.">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          NavigationService.navigate('SelectAvatar', {});
        }}>
        {({handleChange, handleSubmit, values, errors}) => {
          return (
            <View style={styles.contentView}>
              <View>
                <Typography mT={32} mB={10} semiBold>
                  Email
                </Typography>

                <InputField
                  value={values.email}
                  inputRef={emailRef}
                  onChange={handleChange('email')}
                  onFocus={() => handleFocus('email')}
                  focused={focusedField === 'email'}
                  placeholder="Enter Email Address"
                  iconActive={<SVGS.MailIcon />}
                  iconInactive={<SVGS.MailIconInactive />}
                  autoFocus
                  onSubmitEditing={() => passwordRef?.current?.focus()}
                  error={errors.email}
                />

                <Typography mT={20} mB={10} semiBold>
                  Password
                </Typography>

                <InputField
                  value={values.password}
                  onChange={handleChange('password')}
                  onFocus={() => handleFocus('password')}
                  focused={focusedField === 'password'}
                  placeholder="Enter Password"
                  isPassword
                  inputRef={passwordRef}
                  iconActive={<SVGS.PasswordIcon />}
                  onSubmitEditing={handleSubmit}
                  iconInactive={<SVGS.PasswordIconInactive />}
                  error={errors.password}
                />

                <Flex mT={10} justifyContent="space-between">
                  <Flex gap={7}>
                    <Checkbox />
                    <Typography
                      size={14}
                      letterSpacing={0.2}
                      color={Colors.darkblue}>
                      Remember Password
                    </Typography>
                  </Flex>

                  <TouchableOpacity
                    activeOpacity={Metrix.ActiveOpacity}
                    onPress={() => {
                      NavigationService.navigate('ForgotPassword', {});
                    }}>
                    <Typography medium color={Colors.pink} size={14}>
                      Forgot Password?
                    </Typography>
                  </TouchableOpacity>
                </Flex>

                <StandardButton
                  mT={50}
                  useLinearGradient
                  onPress={handleSubmit}
                  title="Sign in"
                />
              </View>

              <Flex mT={44} mB={32} justifyContent="center">
                <Typography letterSpacing={0.2} size={14}>
                  Don’t have an account?{' '}
                </Typography>

                <TouchableOpacity
                  activeOpacity={Metrix.ActiveOpacity}
                  onPress={onPressRegister}>
                  <Typography
                    letterSpacing={0.2}
                    size={14}
                    bold
                    color={Colors.pink}>
                    Register Now
                  </Typography>
                </TouchableOpacity>
              </Flex>
            </View>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Signin;
