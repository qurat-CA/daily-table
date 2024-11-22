import {View} from 'react-native';

import {Typography, BottomSheetComponent} from '../index';
import {Metrix} from '../../config';

const ProfileBottomSheet = ({bottomSheetModalRef}: any) => (
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
);

export default ProfileBottomSheet;
