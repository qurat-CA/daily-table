import {StyleSheet, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import {Typography, BottomSheetComponent, Flex} from '../index';
import {Metrix, SVGS} from '../../config';
import {useState} from 'react';

const ProfileBottomSheet = ({bottomSheetModalRef}: any) => {
  const [imageSelected, setImageSelected] = useState<string>('');

  const Data = [
    {label: 'Select an avatar', Icon: SVGS.EditProfile},
    {label: 'Take a picture', Icon: SVGS.Camera},
    {label: 'Upload from Gallery', Icon: SVGS.Gallery},
  ];

  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 500,
    maxWidth: 500,
  };

  // const handleAddImage = () => {
  //   console.log('fsd');

  //   launchImageLibrary(options, res => {
  //     if (res.assets) {
  //       setImageSelected(res.assets[0].uri);
  //     }
  //   });
  // };

  return (
    <BottomSheetComponent ref={bottomSheetModalRef}>
      {Data?.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={{width: '100%'}}
          onPress={() => {}}
          activeOpacity={Metrix.ActiveOpacity}>
          <Flex mB={16} gap={10} style={styles.container}>
            <item.Icon />
            <Typography medium>{item.label}</Typography>
          </Flex>
        </TouchableOpacity>
      ))}
    </BottomSheetComponent>
  );
};

export default ProfileBottomSheet;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: Metrix.HorizontalSize(24),
    alignItems: 'center',
    height: Metrix.VerticalSize(70),
    backgroundColor: '#F8F7FB',
    borderRadius: 16,
  },
});
