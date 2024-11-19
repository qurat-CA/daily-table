import {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';

import {
  Container,
  Flex,
  InputField,
  LevelIncrease,
  ProfileUpdate,
  StandardButton,
  Typography,
} from '../../components';
import {SVGS} from '../../config';
import styles from './style';
import {gradientColors} from '../../components/InputField/styles';

const SignupAsChild = () => {
  const [focusedField, setFocusedField] = useState<string | null>('firstName');

  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    dob: '',
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
              Date Of Birth
            </Typography>

            <InputField
              value={values.dob}
              onChange={handleChange('dob')}
              onFocus={() => handleFocus('dob')}
              placeholder="DD / MM / YYYY"
              focused={focusedField === 'dob'}
              iconActive={<SVGS.Calendar />}
              iconInactive={<SVGS.Calendar />}
              error={errors.dob}
            />

            <Typography semiBold mT={20} mB={10}>
              Login ID
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
              rightBtn={
                <View style={{width: 90, marginRight: -6}}>
                  <StandardButton
                    gradientColors={gradientColors}
                    start={{x: 1, y: 1}}
                    end={{x: 1, y: 1}}
                    title="Regenerate"
                    useLinearGradient
                    onPress={() => {}}
                    btnPH={10}
                    textSize={11}
                  />
                </View>
              }
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

            <Typography semiBold mT={20}>
              Level Increase
            </Typography>
            <LevelIncrease />

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
