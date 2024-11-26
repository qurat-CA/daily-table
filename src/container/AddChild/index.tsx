import React, {useCallback, useRef, useState} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

import {
  Container,
  DropdownComponent,
  Flex,
  FormInputField,
  LevelIncrease,
  ProfileBottomSheet,
  ProfileUpdate,
  StandardButton,
  Typography,
} from '../../components';
import {Formik} from 'formik';
import {gradientColors, SVGS} from '../../config';

const AddChild = () => {
  const [focusedField, setFocusedField] = useState<string | null>('firstName');
  const [imageSelected, setImageSelected] = useState<string>('');
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    dob: '',
  };

  const handleFocus = (field: string) => setFocusedField(field);
  return (
    <Container
      backIcon
      headerTitle="Add Your Child"
      headerSubText="Add Child Profile to view and monitor progress">
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <ProfileUpdate
              onPress={handlePresentModalPress}
              imageUri={imageSelected}
            />
            <ProfileBottomSheet
              bottomSheetModalRef={bottomSheetModalRef}
              setImageSelected={setImageSelected}
            />

            <Flex justifyContent="space-between" gap={14}>
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
              label="Date Of Birth"
              value={values.dob}
              onChange={handleChange('dob')}
              onFocus={() => handleFocus('dob')}
              placeholder="DD / MM / YYYY"
              focused={focusedField === 'dob'}
              iconActive={<SVGS.Calendar />}
              iconInactive={<SVGS.Calendar />}
              error={errors.dob}
            />

            <FormInputField
              label="Login ID"
              value={values.password}
              onChange={handleChange('password')}
              onFocus={() => handleFocus('password')}
              placeholder="Enter Password"
              focused={focusedField === 'password'}
              iconActive={<SVGS.PasswordIcon />}
              iconInactive={<SVGS.PasswordIconInactive />}
              error={errors.password}
              rightBtn={
                <StandardButton
                  onPress={() => {}}
                  gradientColors={gradientColors}
                  title="Regenerate"
                  useLinearGradient
                />
              }
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

export default AddChild;
