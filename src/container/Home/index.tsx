import {StyleSheet, Text, View} from 'react-native';

import {AppContainer, Typography, UserHeader} from '../../components';
import {Metrix} from '../../config';

const Home = () => {
  return (
    <AppContainer
      headerChildren={
        <View style={{marginTop: Metrix.VerticalSize(50)}}>
          <UserHeader />
        </View>
      }>
      <Typography>efhqie</Typography>
    </AppContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
