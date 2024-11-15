import {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';

import {SigninProps} from '../../config/type/navigation';
import {
  Container,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {SVGS} from '../../config';

const Signin = ({route}: SigninProps) => {
  const {role} = route?.params;
  const [emailFocused, setEmailFocused] = useState(true);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <Container
      headerTitle={`Welcome ${role.charAt(0).toUpperCase() + role.slice(1)} 👋`}
      headerSubText="Let’s Get You Started Sign In To Continue.">
      <Typography mT={32} mB={10} semiBold>
        Email
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <InputField
              value={values.email}
              onChange={handleChange('email')}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              placeholder="Enter Email Address"
              focused={emailFocused}
              iconActive={<SVGS.MailIcon />}
              iconInactive={<SVGS.MailIconInactive />}
            />

            <Typography mT={20} mB={10} semiBold>
              Password
            </Typography>

            <InputField
              value={values.password}
              onChange={handleChange('password')}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              placeholder="Enter Password"
              secureTextEntry
              focused={passwordFocused}
              iconActive={<SVGS.PasswordIcon />}
              iconInactive={<SVGS.PasswordIconInactive />}
              isPassword
            />

            <StandardButton
              useLinearGradient
              onPress={handleSubmit}
              title="Sign in"
            />
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default Signin;
