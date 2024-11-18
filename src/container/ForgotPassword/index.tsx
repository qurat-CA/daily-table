import {View} from 'react-native';
import {
  Container,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {Formik} from 'formik';
import {object, string} from 'yup';
import {SVGS} from '../../config';

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = object({
    email: string().email('Enter a valid email').required('Email is required'),
  });

  return (
    <Container
      backIcon
      headerTitle="Forgot Your Password?"
      headerSubText="Please enter your registered email and we sent an OTP Verification code to your email.">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values, errors}) => {
          return (
            <View>
              <Typography mT={32} mB={10} semiBold>
                Email
              </Typography>

              <InputField
                value={values.email}
                onChange={handleChange('email')}
                onFocus={() => {}}
                focused={true}
                placeholder="Enter Email Address"
                iconActive={<SVGS.MailIcon />}
                iconInactive={<SVGS.MailIconInactive />}
                autoFocus
                error={errors.email}
              />

              <StandardButton
                mT={300}
                useLinearGradient
                onPress={handleSubmit}
                title="Proceed"
              />
            </View>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
