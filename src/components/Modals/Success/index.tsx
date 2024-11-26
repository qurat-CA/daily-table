import {View} from 'react-native';

import {Typography, ModalWrapper, StandardButton} from '../../index';
import {Colors, Metrix, NavigationService, SVGS} from '../../../config';

type LogoutProps = {
  isVisible: boolean;
  setVisible: (visible: boolean) => void;
};

const SuccessModal = ({isVisible, setVisible}: LogoutProps) => {
  return (
    <ModalWrapper isVisible={isVisible} setVisible={setVisible}>
      <View style={{alignSelf: 'center', marginTop: Metrix.VerticalSize(50)}}>
        <SVGS.Success width={140} height={140} />
      </View>

      <Typography
        textAlign="center"
        size={24}
        mT={16}
        extraBold
        color={Colors.purpleV2}>
        Password Reset Successfully!
      </Typography>

      <StandardButton
        title="Back To Sign In"
        onPress={() => {
          setVisible(false);
          NavigationService.navigate('Signin', {role: 'parent'});
        }}
        useLinearGradient
        gradientColors={[Colors.darkblue, Colors.blueV3]}
        mT={34}
        mB={45}
      />
    </ModalWrapper>
  );
};

export default SuccessModal;
