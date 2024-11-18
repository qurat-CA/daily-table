import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import {StandardButton, Typography, Container} from '../../components';
import {Colors, Metrix, NavigationService} from '../../config';
import {roles} from './data';
import {styles} from './style';

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState<string>(roles[0].role);

  const onPressRole = (role: string) => {
    setSelectedRole(role);
  };

  const onPressContinue = () => {
    NavigationService.navigate('Signin', {role: selectedRole});
  };

  return (
    <Container
      headerTitle="Welcome To Daily Tables 👋"
      headerSubText="Let’s Get You Started.">
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
          <View
            style={[
              styles.radioButton,
              item.role !== selectedRole && {borderColor: '#898989'},
            ]}>
            {item.role === selectedRole && <View style={styles.radioFill} />}
          </View>
          <item.Icon width={40} height={40} />
          <Typography color={Colors.textV2} semiBold size={20}>
            {item.label}
          </Typography>
        </TouchableOpacity>
      ))}

      <StandardButton
        textColor={Colors.white}
        useLinearGradient
        title="Continue"
        onPress={onPressContinue}
        style={{marginTop: Metrix.VerticalSize(40)}}
      />
    </Container>
  );
};

export default SelectRole;
