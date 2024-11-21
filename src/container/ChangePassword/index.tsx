import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {object, string, ref} from 'yup';

import {
  Container,
  InputField,
  StandardButton,
  SuccessModal,
  Typography,
} from '../../components';
import {SVGS} from '../../config';
import styles from './style';

const ChangePassword = () => {
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const validationSchema = object({
    password: string()
      .min(6, 'Password must contain at least 6 characters')
      .required('Password is required'),
    confirmPassword: string()
      .oneOf([ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  useEffect(() => {
    setFocusedField('password');
  }, []);

  return (
    <Container
      contentContainerStyle={{flex: 1}}
      backIcon
      headerTitle="Reset Your Password"
      headerSubText="Please Enter your new password">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          setSuccessModal(true);
        }}>
        {({handleChange, handleSubmit, values, errors}) => {
          return (
            <View style={styles.contentView}>
              <View>
                <Typography mT={32} mB={10} semiBold>
                  New Password
                </Typography>

                <InputField
                  value={values.password}
                  onChange={handleChange('password')}
                  onFocus={() => handleFocus('password')}
                  focused={focusedField === 'password'}
                  placeholder="Enter New Password"
                  iconActive={<SVGS.PasswordIcon />}
                  iconInactive={<SVGS.PasswordIconInactive />}
                  autoFocus
                  error={errors.password}
                  isPassword
                />

                <Typography mT={32} mB={10} semiBold>
                  Confirm Password
                </Typography>

                <InputField
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  onFocus={() => handleFocus('confirmPassword')}
                  focused={focusedField === 'confirmPassword'}
                  placeholder="Enter Confirm Password"
                  iconActive={<SVGS.PasswordIcon />}
                  iconInactive={<SVGS.PasswordIconInactive />}
                  error={errors.confirmPassword}
                  isPassword
                />
              </View>

              <View style={styles.btnCont}>
                <StandardButton
                  useLinearGradient
                  onPress={handleSubmit}
                  title="Confirm"
                />
              </View>
            </View>
          );
        }}
      </Formik>

      {successModal && (
        <SuccessModal isVisible={successModal} setVisible={setSuccessModal} />
      )}
    </Container>
  );
};

export default ChangePassword;
