import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';

import {Colors, Metrix} from '../../config';

interface ModalWrapperProps {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
  pT?: number;
  pB?: number;
  pH?: number;
  modalBoxStyle?: StyleProp<ViewStyle>;
  mH?: number;
  children: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isVisible = false,
  setVisible = () => {},
  pT = 0,
  pB = 0,
  pH = 37,
  modalBoxStyle = {},
  mH = 20,
  children,
}) => {
  const centeredViewStyle = {
    paddingHorizontal: Metrix.HorizontalSize(pH),
    paddingTop: Metrix.VerticalSize(pT),
    paddingBottom: Metrix.VerticalSize(pB),
    marginHorizontal: Metrix.HorizontalSize(mH),
  };

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={toggleModal}>
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={toggleModal}>
        <BlurView style={styles.absoluteFill} blurType="dark" blurAmount={1} />
        <TouchableOpacity activeOpacity={1}>
          <View style={[styles.modalView, centeredViewStyle, modalBoxStyle]}>
            {children}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    borderRadius: 40,
    marginHorizontal: Metrix.HorizontalSize(16),
    backgroundColor: Colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    opacity: 0.99,
  },
});

export default ModalWrapper;
