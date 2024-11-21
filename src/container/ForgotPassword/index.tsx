import {View} from 'react-native';
import {Formik} from 'formik';

import {
  Container,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {forgetPasswordSchema, NavigationService, SVGS} from '../../config';
import styles from './style';

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  return (
    <Container
      contentContainerStyle={{flex: 1}}
      backIcon
      headerTitle="Forgot Your Password?"
      headerSubText="Please enter your registered email and we sent an OTP Verification code to your email.">
      <Formik
        initialValues={initialValues}
        validationSchema={forgetPasswordSchema}
        onSubmit={values => {
          console.log(values);
          NavigationService.navigate('Verification', {});
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
                  onChange={handleChange('email')}
                  onFocus={() => {}}
                  focused={true}
                  placeholder="Enter Email Address"
                  iconActive={<SVGS.MailIcon />}
                  iconInactive={<SVGS.MailIconInactive />}
                  autoFocus
                  error={errors.email}
                />
              </View>

              <View style={styles.btnCont}>
                <StandardButton
                  useLinearGradient
                  onPress={handleSubmit}
                  title="Proceed"
                />
              </View>
            </View>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ForgotPassword;
