import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';

import {
  Container,
  Flex,
  FormInputField,
  ProfileUpdate,
  StandardButton,
  Typography,
} from '../../components';
import {Colors, Metrix, NavigationService, SVGS} from '../../config';
import styles from './style';

const Signup = () => {
  const [focusedField, setFocusedField] = useState<string | null>('firstName');
  const [showOtherField, setShowOtherField] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    anotherParentFirstName: '',
    anotherParentLastName: '',
    anotherParentEmail: '',
  };

  const handleFocus = (field: string) => setFocusedField(field);

  return (
    <Container
      headerTitle="Create A Parent Profile"
      headerSubText="Fill in the below.">
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <ProfileUpdate onPress={() => {}} />

            <Flex justifyContent="space-between" gap={14} mT={20}>
              <FormInputField
                label="First Name"
                value={values.firstName}
                onChange={handleChange('firstName')}
                onFocus={() => handleFocus('firstName')}
                placeholder="Enter First Name"
                focused={focusedField === 'firstName'}
                iconActive={<SVGS.UserActive />}
                iconInactive={<SVGS.UserInactive />}
                error={errors.firstName}
              />
              <FormInputField
                label="Last Name"
                value={values.lastName}
                onChange={handleChange('lastName')}
                onFocus={() => handleFocus('lastName')}
                placeholder="Enter Last Name"
                focused={focusedField === 'lastName'}
                iconActive={<SVGS.UserActive />}
                iconInactive={<SVGS.UserInactive />}
                error={errors.lastName}
              />
            </Flex>

            <FormInputField
              label="Email"
              value={values.email}
              onChange={handleChange('email')}
              onFocus={() => handleFocus('email')}
              placeholder="Enter Email Address"
              focused={focusedField === 'email'}
              iconActive={<SVGS.MailIcon />}
              iconInactive={<SVGS.MailIconInactive />}
              error={errors.email}
            />

            <FormInputField
              label="Password"
              value={values.password}
              onChange={handleChange('password')}
              onFocus={() => handleFocus('password')}
              placeholder="Enter Password"
              focused={focusedField === 'password'}
              iconActive={<SVGS.PasswordIcon />}
              iconInactive={<SVGS.PasswordIconInactive />}
              error={errors.password}
              isPassword
            />
            <FormInputField
              label="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              onFocus={() => handleFocus('confirmPassword')}
              placeholder="Confirm Password"
              focused={focusedField === 'confirmPassword'}
              iconActive={<SVGS.PasswordIcon />}
              iconInactive={<SVGS.PasswordIconInactive />}
              error={errors.confirmPassword}
              isPassword
            />

            <TouchableOpacity
              onPress={() => setShowOtherField(true)}
              activeOpacity={Metrix.ActiveOpacity}
              style={styles.addUserCont}>
              <View style={styles.plusCont}>
                <SVGS.PlusIcon />
              </View>
              <Typography textAlign="center" size={12} color={Colors.greyV3}>
                Add Another Root User
              </Typography>
            </TouchableOpacity>

            {showOtherField && (
              <>
                <Typography bold mT={20}>
                  Add Another Parent
                </Typography>
                <ProfileUpdate onPress={() => {}} />

                <Flex justifyContent="space-between" gap={14} mT={12}>
                  <FormInputField
                    label="First Name"
                    value={values.anotherParentFirstName}
                    onChange={handleChange('anotherParentFirstName')}
                    onFocus={() => handleFocus('anotherParentFirstName')}
                    placeholder="Enter First Name"
                    focused={focusedField === 'anotherParentFirstName'}
                    iconActive={<SVGS.UserActive />}
                    iconInactive={<SVGS.UserInactive />}
                    error={errors.anotherParentFirstName}
                  />
                  <FormInputField
                    label="Last Name"
                    value={values.anotherParentLastName}
                    onChange={handleChange('anotherParentLastName')}
                    onFocus={() => handleFocus('anotherParentLastName')}
                    placeholder="Enter Last Name"
                    focused={focusedField === 'anotherParentLastName'}
                    iconActive={<SVGS.UserActive />}
                    iconInactive={<SVGS.UserInactive />}
                    error={errors.anotherParentLastName}
                  />
                </Flex>

                <FormInputField
                  label="Email"
                  value={values.anotherParentEmail}
                  onChange={handleChange('anotherParentEmail')}
                  onFocus={() => handleFocus('anotherParentEmail')}
                  placeholder="Enter Email Address"
                  focused={focusedField === 'anotherParentEmail'}
                  iconActive={<SVGS.MailIcon />}
                  iconInactive={<SVGS.MailIconInactive />}
                  error={errors.anotherParentEmail}
                />
              </>
            )}

            <StandardButton
              mT={50}
              useLinearGradient
              onPress={handleSubmit}
              title="Sign Up"
            />
          </>
        )}
      </Formik>

      <Flex mT={90} mB={32} justifyContent="center">
        <Typography letterSpacing={0.2} size={14}>
          Already have an account?{' '}
        </Typography>
        <TouchableOpacity
          activeOpacity={Metrix.ActiveOpacity}
          onPress={() =>
            NavigationService.navigate('Signin', {role: 'parent'})
          }>
          <Typography letterSpacing={0.2} size={14} bold color={Colors.pink}>
            Sign In
          </Typography>
        </TouchableOpacity>
      </Flex>
    </Container>
  );
};

export default Signup;
