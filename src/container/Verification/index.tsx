import {TouchableOpacity, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';

import {Container, Flex, StandardButton, Typography} from '../../components';
import {Colors, Metrix} from '../../config';
import styles from './style';

const Verification = () => {
  return (
    <Container
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}
      backIcon
      headerTitle="OTP Verification"
      headerSubText="Please Enter the 6 digit verification code sent on an email youremail@*********">
      <View>
        <OtpInput
          numberOfDigits={6}
          focusColor="green"
          focusStickBlinkingDuration={500}
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: 'One-Time Password',
          }}
          theme={{
            containerStyle: styles.container,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          }}
        />

        <Flex mT={44} justifyContent="center">
          <Typography letterSpacing={0.2} size={14}>
            Don’t receive code?{' '}
          </Typography>

          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            // disabled={btnDisable}
            onPress={() => {}}>
            <Typography
              letterSpacing={0.2}
              size={14}
              medium
              color={Colors.pink}>
              Re-send
            </Typography>
          </TouchableOpacity>
        </Flex>

        <Flex mT={10} justifyContent="center">
          <Typography letterSpacing={0.2} size={14} color="#ADADAD">
            Resend in{' '}
            <Typography
              letterSpacing={0.2}
              size={14}
              medium
              color={Colors.pink}>
              0:56{' '}
              <Typography letterSpacing={0.2} size={14} color="#ADADAD">
                secs
              </Typography>
            </Typography>
          </Typography>
        </Flex>
      </View>

      <StandardButton
        mB={47}
        useLinearGradient
        onPress={() => {}}
        title="Proceed"
      />
    </Container>
  );
};

export default Verification;
