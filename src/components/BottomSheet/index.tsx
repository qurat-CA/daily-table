import {forwardRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

import {Colors, Metrix} from '../../config';

const BottomSheetComponent = forwardRef<
  BottomSheetModal,
  {children: React.ReactNode}
>((props, ref) => {
  const snapPoints = ['50%', '50%', '90%'];

  return (
    <BottomSheetModal
      backgroundStyle={{borderRadius: 50, backgroundColor: Colors.white}}
      handleIndicatorStyle={{
        backgroundColor: Colors.greyV10,
        width: Metrix.HorizontalSize(60),
        height: Metrix.VerticalSize(6),
      }}
      snapPoints={snapPoints}
      ref={ref}
      {...props}>
      <BottomSheetView style={styles.contentContainer}>
        {props.children}
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheetComponent;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: Metrix.HorizontalSize(25),
    paddingVertical: Metrix.VerticalSize(40),
  },
});
