import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Typography, Flex} from '../index';
import {Colors, gradientColors, Metrix} from '../../config';

const LevelIncrease = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const DATA = [
    {id: 1, label: 'Numeric Increase'},
    {id: 2, label: 'School Curriculum'},
  ];

  return (
    <Flex gap={19} mT={10}>
      {DATA.map((item, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={Metrix.ActiveOpacity}
          onPress={() => setSelectedLevel(i)}>
          <LinearGradient
            start={{x: 0.5, y: 1}}
            end={{x: 0.5, y: 0}}
            colors={
              selectedLevel === i ? gradientColors : ['#F9F9F9', '#F9F9F9']
            }
            style={styles.linearCont}>
            <View
              style={[
                styles.innerCont,
                selectedLevel !== i && {borderWidth: 1, borderColor: '#CACACA'},
              ]}>
              <View
                style={[
                  styles.chipCont,
                  selectedLevel !== i && {backgroundColor: '#F9F9F9'},
                ]}>
                <Typography
                  size={14}
                  semiBold
                  color={selectedLevel === i ? Colors.purpleV2 : Colors.greyV2}>
                  {item.label}
                </Typography>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </Flex>
  );
};

export default LevelIncrease;

const styles = StyleSheet.create({
  linearCont: {
    borderRadius: 40,
    padding: 1,
  },
  innerCont: {
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  chipCont: {
    width: Metrix.HorizontalSize(151),
    height: Metrix.VerticalSize(50),
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5368924',
  },
});
