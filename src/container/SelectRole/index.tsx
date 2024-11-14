import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {StandardButton, Typography, Container} from '../../components';
import {Colors, Metrix} from '../../config';
import {roles} from './data';
import {styles} from './style';

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const onPressRole = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <Container>
      <Typography mT={36} bold size={20}>
        Select Role
      </Typography>

      <Typography color="#818181" mT={5} size={15} mB={36} letterSpacing={0.2}>
        Select your role as a Parent or a Child to continue.
      </Typography>

      {roles.map(item => (
        <TouchableOpacity
          activeOpacity={Metrix.ActiveOpacity}
          onPress={() => onPressRole(item.role)}
          key={item.role}
          style={styles.roleCont}>
          <LinearGradient
            colors={['#8052A0', '#55A0D7', '#85D3EB']}
            style={[
              styles.radioBtnCont,
              selectedRole === item.role && styles.selectedRole,
            ]}>
            {selectedRole === item.role && <View style={styles.radioBtn} />}
          </LinearGradient>
          <item.Icon width={40} height={40} />
          <Typography color={Colors.textV2} semiBold size={20}>
            {item.label}
          </Typography>
        </TouchableOpacity>
      ))}

      <View style={styles.continueBtn}>
        <StandardButton
          textColor={Colors.white}
          useLinearGradient
          title="Continue"
          onPress={() => {}}
        />
      </View>
    </Container>
  );
};

export default SelectRole;
