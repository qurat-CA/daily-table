import {StatusBar, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

import Navigation from './src';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const {isConnected} = useNetInfo();
  return (
    <>
      <StatusBar
        animated
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {!isConnected && <View style={{backgroundColor: 'red', height: 20}} />}
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigation />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
