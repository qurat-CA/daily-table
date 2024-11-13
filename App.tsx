import {StatusBar, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import Navigation from './src';

const App = () => {
  const {type, isConnected} = useNetInfo();
  return (
    <>
      <StatusBar
        animated
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {!isConnected && <View style={{backgroundColor: 'red', height: 20}} />}
      <Navigation />
    </>
  );
};

export default App;
