import {StyleSheet, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Typography, BottomSheetComponent, Flex} from '../index';
import {Metrix, NavigationService, SVGS} from '../../config';

const ProfileBottomSheet = ({bottomSheetModalRef, setImageSelected}: any) => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 500,
    maxWidth: 500,
  };

  const handleAddImage = () => {
    bottomSheetModalRef.current?.close();
    launchImageLibrary(options, res => {
      if (res.assets) {
        setImageSelected(res.assets[0].uri);
      }
    });
  };

  const handleTakePicture = () => {
    bottomSheetModalRef.current?.close();
    launchCamera(options, res => {
      if (res.assets) {
        setImageSelected(res.assets[0].uri);
      }
    });
  };

  const Data = [
    {
      label: 'Select an avatar',
      Icon: SVGS.EditProfile,
      onPress: () => {
        bottomSheetModalRef.current?.close();
        NavigationService.navigate('SelectAvatar', {});
      },
    },
    {label: 'Take a picture', Icon: SVGS.Camera, onPress: handleTakePicture},
    {label: 'Upload from Gallery', Icon: SVGS.Gallery, onPress: handleAddImage},
  ];

  return (
    <BottomSheetComponent ref={bottomSheetModalRef}>
      {Data?.map((item, i) => (
        <TouchableOpacity
          key={i}
          style={{width: '100%'}}
          onPress={item.onPress}
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
