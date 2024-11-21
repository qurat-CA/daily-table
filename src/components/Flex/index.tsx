import {StyleSheet, View} from 'react-native';
import {FlexProps} from '../../config/type/appDataType';

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent = 'flex-start',
  mT = 0,
  gap = 0,
  flexWrap = 'nowrap',
}) => {
  return (
    <View
      style={[
        styles.container,
        {justifyContent, marginTop: mT, gap: gap, flexWrap: flexWrap},
      ]}>
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
