import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {
  Container,
  Flex,
  InputField,
  StandardButton,
  Typography,
} from '../../components';
import {Formik} from 'formik';
import {Colors, Metrix, NavigationService, SVGS} from '../../config';
import LinearGradient from 'react-native-linear-gradient';

const Signup = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  useEffect(() => {
    setFocusedField('firstName');
  }, []);

  return (
    <Container
      headerTitle="Create A Parent Profile"
      headerSubText="Fill in the below.">
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <TouchableOpacity
              activeOpacity={Metrix.ActiveOpacity}
              onPress={() => {}}
              style={styles.profileCont}>
              <SVGS.ProfieSvg />

              <LinearGradient
                colors={['#8052A0', '#55A0D7', '#85D3EB']}
                style={styles.cameraIcon}>
                <SVGS.CameraIcon />
              </LinearGradient>
            </TouchableOpacity>
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

            <Typography semiBold mT={10} mB={10}>
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

            <Typography semiBold mT={20} mB={10}>
              Password
            </Typography>

            <InputField
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

            <Typography semiBold mT={20} mB={10}>
              Confirm Password
            </Typography>

            <InputField
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
              onPress={() => {
                setShowOtherField(true);
              }}
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
                <Typography semiBold mT={20}>
                  Add Other Parent
                </Typography>

                <Flex justifyContent="space-between" gap={14} mT={12}>
                  <View style={styles.nameCont}>
                    <Typography semiBold mB={10}>
                      First Name
                    </Typography>
                    <InputField
                      value={values.anotherParentFirstName}
                      onChange={handleChange('anotherParentFirstName')}
                      onFocus={() => handleFocus('anotherParentFirstName')}
                      placeholder="Enter First Name"
                      focused={focusedField === 'anotherParentFirstName'}
                      iconActive={<SVGS.UserActive />}
                      iconInactive={<SVGS.UserInactive />}
                      error={errors.anotherParentFirstName}
                    />
                  </View>
                  <View style={styles.nameCont}>
                    <Typography semiBold mB={10}>
                      Last Name
                    </Typography>
                    <InputField
                      value={values.anotherParentLastName}
                      onChange={handleChange('anotherParentLastName')}
                      onFocus={() => handleFocus('anotherParentLastName')}
                      placeholder="Enter Last Name"
                      focused={focusedField === 'anotherParentLastName'}
                      iconActive={<SVGS.UserActive />}
                      iconInactive={<SVGS.UserInactive />}
                      error={errors.anotherParentLastName}
                    />
                  </View>
                </Flex>

                <InputField
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

      <Typography textAlign="center" size={14} mT={90} mB={32}>
        <Text style={{color: Colors.textV2}}>Already have an account? </Text>
        <Text
          onPress={() => {
            NavigationService.navigate('Signup', {});
          }}
          style={{color: Colors.pink, fontWeight: 'bold'}}>
          Sign In
        </Text>
      </Typography>
    </Container>
  );
};

export default Signup;
