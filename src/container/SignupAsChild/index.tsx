import {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {View} from 'react-native';
import {Formik} from 'formik';

import {
  BottomSheetComponent,
  Container,
  DropdownComponent,
  Flex,
  InputField,
  LevelIncrease,
  ProfileUpdate,
  StandardButton,
  Typography,
} from '../../components';
import {Metrix, SVGS} from '../../config';
import styles from './style';
import {gradientColors} from '../../components/InputField/styles';

const SignupAsChild = () => {
  const [focusedField, setFocusedField] = useState<string | null>('firstName');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    console.log('hdiqw');
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <ProfileUpdate onPress={handlePresentModalPress} />
            <BottomSheetComponent ref={bottomSheetModalRef}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: Metrix.VerticalSize(70),
                  backgroundColor: '#F8F7FB',
                  borderRadius: 16,
                }}>
                <Typography>Select an avatar</Typography>
              </View>
            </BottomSheetComponent>
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

            <Typography semiBold mT={20}>
              Select Currency
            </Typography>

            <DropdownComponent
              mT={10}
              data={[{label: 'Child', value: 'child'}]}
            />

            <Typography semiBold mT={20} mB={10}>
              Max Points
            </Typography>

            <InputField
              value={values.dob}
              onChange={handleChange('dob')}
              onFocus={() => handleFocus('dob')}
              placeholder="00"
              focused={focusedField === 'dob'}
              error={errors.dob}
            />

            <Typography semiBold mT={20}>
              Points Per Sheet
            </Typography>

            <DropdownComponent
              mT={10}
              data={[{label: 'Child', value: 'child'}]}
            />

            <StandardButton
              mT={50}
              mB={55}
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
