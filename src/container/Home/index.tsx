import {FlatList, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';

import {
  AppContainer,
  ChildProfileCard,
  Flex,
  SearchField,
  StandardButton,
  Typography,
  UserHeader,
} from '../../components';
import {Colors, Metrix, NavigationService} from '../../config';
import ChildProfileData from './data';

const Home = () => {
  const handleSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <AppContainer
      headerChildren={
        <View style={styles.headerCont}>
          <UserHeader />
          <Formik
            initialValues={{search: ''}}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}>
            {({handleSubmit, handleChange, values, errors}) => (
              <SearchField
                value={values.search}
                placeholder="Search"
                onChange={handleChange('search')}
                onSubmitEditing={handleSubmit}
                error={errors.search}
              />
            )}
          </Formik>
        </View>
      }>
      <Flex mT={32} alignItems="center" justifyContent="space-between">
        <Typography size={18} bold color={Colors.darkblue}>
          Child Profiles
        </Typography>

        <StandardButton
          title="+ Add a Child"
          onPress={() => {
            NavigationService.navigate('AddChild', {});
          }}
          useLinearGradient
          style={styles.btnStyle}
          textSize={11}
        />
      </Flex>
      <FlatList
        data={ChildProfileData}
        renderItem={({item}) => <ChildProfileCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        style={{
          marginTop: Metrix.VerticalSize(32),
          paddingBottom: Metrix.VerticalSize(115),
        }}
      />
    </AppContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerCont: {marginTop: Metrix.VerticalSize(70)},
  btnStyle: {
    marginLeft: Metrix.HorizontalSize(10),
    width: Metrix.HorizontalSize(130),
  },
});
