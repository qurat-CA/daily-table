import {StyleSheet, View} from 'react-native';
import {FlexProps} from '../../config/type/appDataType';

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent = 'flex-start',
  mT = 0,
}) => {
  return (
    <View style={[styles.container, {justifyContent, marginTop: mT}]}>
      {children}
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
