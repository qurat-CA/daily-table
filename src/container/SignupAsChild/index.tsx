import {StyleSheet} from 'react-native';

import {BottomSheetComponent, Container, ProfileUpdate} from '../../components';

const SignupAsChild = () => {
  return (
    <Container
      headerTitle="Create Child Profile"
      headerSubText="Create Child Profile to view and monitor progress"
      backIcon>
      <ProfileUpdate />
      <BottomSheetComponent />
    </Container>
  );
};

export default SignupAsChild;

const styles = StyleSheet.create({});
