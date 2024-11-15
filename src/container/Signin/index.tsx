import {useRef} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';

import {SigninProps} from '../../config/type/navigation';
import {
  Container,
  Flex,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {Colors, SVGS} from '../../config';

const Signin = ({route}: SigninProps) => {
  const {role} = route?.params;

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Container
      headerTitle={`Welcome ${role.charAt(0).toUpperCase() + role.slice(1)} 👋`}
      headerSubText="Let’s Get You Started Sign In To Continue.">
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Typography mT={32} mB={10} semiBold>
              Email
            </Typography>

            <InputField
              value={values.email}
              onChange={handleChange('email')}
              onFocus={() => {
                emailInputRef.current?.focus();
              }}
              onBlur={handleBlur('email')}
              placeholder="Enter Email Address"
              focused={emailInputRef.current?.isFocused()}
              iconActive={<SVGS.MailIcon />}
              iconInactive={<SVGS.MailIconInactive />}
              inputRef={emailInputRef}
            />

            <Typography mT={20} mB={10} semiBold>
              Password
            </Typography>

            <InputField
              value={values.password}
              onChange={handleChange('password')}
              onFocus={() => {
                passwordInputRef.current?.focus();
              }}
              onBlur={handleBlur('password')}
              placeholder="Enter Password"
              secureTextEntry
              focused={passwordInputRef.current?.isFocused()}
              iconActive={<SVGS.PasswordIcon />}
              iconInactive={<SVGS.PasswordIconInactive />}
              inputRef={passwordInputRef}
              isPassword
            />

            <Flex mT={10} justifyContent="space-between">
              <Typography size={14} color={'#0C1927'}>
                Remember Password
              </Typography>
              <Typography medium color={Colors.pink} size={14}>
                Forgot Password?
              </Typography>
            </Flex>

            <StandardButton
              mT={50}
              useLinearGradient
              onPress={handleSubmit}
              title="Sign in"
            />
          </View>
        )}
      </Formik>

      <Typography textAlign="center" size={14} mT={90}>
        <Text style={{color: Colors.textV2}}>Don’t have an account? </Text>
        <Text style={{color: Colors.pink, fontWeight: 'bold'}}>
          Register Now
        </Text>
      </Typography>
    </Container>
  );
};

export default Signin;
