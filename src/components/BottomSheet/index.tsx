import React, {forwardRef, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import {Typography} from '../index';
import {Colors} from '../../config';

const BottomSheetComponent = forwardRef(() => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  return (
    <View style={styles.container}>
      <BottomSheet snapPoints={snapPoints}>
        {/* <BottomSheetView style={styles.contentContainer}> */}
        <Typography color={Colors.pinkV2}>Awesome 🎉</Typography>
        {/* </BottomSheetView> */}
      </BottomSheet>
    </View>
  );
});

export default BottomSheetComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
