import {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';

import {
  Container,
  Flex,
  InputField,
  ProfileUpdate,
  StandardButton,
  Typography,
} from '../../components';
import {SVGS} from '../../config';
import styles from './style';

const SignupAsChild = () => {
  const [focusedField, setFocusedField] = useState<string | null>('firstName');

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  return (
    <Container
      headerTitle="Create Child Profile"
      headerSubText="Create Child Profile to view and monitor progress"
      backIcon>
      <ProfileUpdate />

      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <Flex justifyContent="space-between" gap={14} mT={20}>
              <View style={styles.nameCont}>
                <Typography semiBold mB={10}>
                  First Name
                </Typography>
                <InputField
                  value={values.firstName}
                  onChange={handleChange('firstName')}
                  onFocus={() => handleFocus('firstName')}
                  placeholder="Enter First Name"
                  focused={focusedField === 'firstName'}
                  iconActive={<SVGS.UserActive />}
                  iconInactive={<SVGS.UserInactive />}
                  error={errors.firstName}
                />
              </View>
              <View style={styles.nameCont}>
                <Typography semiBold mB={10}>
                  Last Name
                </Typography>
                <InputField
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  onFocus={() => handleFocus('lastName')}
                  placeholder="Enter Last Name"
                  focused={focusedField === 'lastName'}
                  iconActive={<SVGS.UserActive />}
                  iconInactive={<SVGS.UserInactive />}
                  error={errors.lastName}
                />
              </View>
            </Flex>

            <Typography semiBold mB={10}>
              Email
            </Typography>

            <InputField
              value={values.email}
              onChange={handleChange('email')}
              onFocus={() => handleFocus('email')}
              placeholder="Enter Email Address"
              focused={focusedField === 'email'}
              iconActive={<SVGS.MailIcon />}
              iconInactive={<SVGS.MailIconInactive />}
              error={errors.email}
            />

            <Typography semiBold mT={20}>
              Level Increase
            </Typography>

            <StandardButton
              mT={50}
              useLinearGradient
              onPress={handleSubmit}
              title="Create Children"
            />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default SignupAsChild;
