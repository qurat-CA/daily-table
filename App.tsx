import {StatusBar, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import Navigation from './src';

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
      <GestureHandlerRootView
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
