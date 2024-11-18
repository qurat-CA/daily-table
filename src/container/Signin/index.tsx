import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import {object, string} from 'yup';

import {SigninProps} from '../../config/type/navigation';
import {
  Container,
  Flex,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {Colors, Metrix, NavigationService, SVGS} from '../../config';

const Signin = ({route}: SigninProps) => {
  const {role} = route?.params;

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const initialValues = {
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

  useEffect(() => {
    setFocusedField('email');
  }, []);

  return (
    <Container
      headerTitle={`Welcome ${role.charAt(0).toUpperCase() + role.slice(1)} 👋`}
      headerSubText="Let’s Get You Started Sign In To Continue.">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => {
          return (
            <View>
              <Typography mT={32} mB={10} semiBold>
                Email
              </Typography>

              <InputField
                value={values.email}
                onChange={handleChange('email')}
                onFocus={() => handleFocus('email')}
                focused={focusedField === 'email'}
                placeholder="Enter Email Address"
                iconActive={<SVGS.MailIcon />}
                iconInactive={<SVGS.MailIconInactive />}
                autoFocus
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
                secureTextEntry
                iconActive={<SVGS.PasswordIcon />}
                iconInactive={<SVGS.PasswordIconInactive />}
                error={errors.password}
              />

              <Flex mT={10} justifyContent="space-between">
                <Typography size={14} color={'#0C1927'}>
                  Remember Password
                </Typography>
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
          );
        }}
      </Formik>

      <Typography textAlign="center" size={14} mT={90} mB={32}>
        <Text style={{color: Colors.textV2}}>Don’t have an account? </Text>
        <Text
          onPress={() => {
            NavigationService.navigate('Signup', {role});
          }}
          style={{color: Colors.pink, fontWeight: 'bold'}}>
          Register Now
        </Text>
      </Typography>
    </Container>
  );
};

export default Signin;
