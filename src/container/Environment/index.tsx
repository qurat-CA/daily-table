import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Metrix, NavigationService} from '../../config';
import StandardButton from '../../components/button';
import AuthStore from '../../store/auth';
import {useNavigation} from '@react-navigation/native';
const data = [
  {label: 'UAT', url: 'uat'},
  {label: 'Development', url: 'dev'},
  {label: 'Quality Assurance', url: 'qa'},
  {label: 'Quality Assurance', url: 'qa'},
];

const Environment = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();
  const {url, updateUrl} = AuthStore.baseUrl();
  const updateBaseUrlHandler = (url: string) => {
    updateUrl(url);
    NavigationService.navigate('Splash', {});
  };
  return (
    <View style={styles.container}>
      {data.map(_item => {
        const {label, url} = _item;
        return (
          <TouchableOpacity
            onPress={() => setSelected(url)}
            activeOpacity={Metrix.ActiveOpacity}
            style={styles.itemContainer}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: selected === url ? 'green' : 'transparent',
                },
              ]}
            />
            <Text style={styles.itemText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={{width: '100%', marginTop: Metrix.VerticalSize(50)}}>
        <StandardButton
          onPress={() => updateBaseUrlHandler(selected)}
          title={'Start Application'}
        />
      </View>

      <View
        style={{
          width: '50%',
          alignSelf: 'flex-end',
          marginTop: Metrix.VerticalSize(10),
        }}>
        <StandardButton
          onPress={() => {
            navigation.goBack();
          }}
          title={'Go back'}
        />
      </View>
    </View>
  );
};

export default Environment;
