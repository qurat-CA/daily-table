import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';

import {
  AppContainer,
  SearchField,
  Typography,
  UserHeader,
} from '../../components';
import {Metrix} from '../../config';

const Home = () => {
  const handleSubmit = (values: any) => {
    console.log('values', values);
  };

  return (
    <AppContainer
      headerChildren={
        <View style={{marginTop: Metrix.VerticalSize(70)}}>
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
      <Typography>heelo hihi</Typography>
    </AppContainer>
  );
};

export default Home;

const styles = StyleSheet.create({});
