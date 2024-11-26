import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, gradientColors, Metrix, SVGS} from '../../../config';
import {Flex, Typography} from '../../index';

interface ChildProfileItem {
  id: number;
  name: string;
  level: number;
  age: number | string;
  image: string;
  streak?: boolean;
}

interface ChildProfileCardProps {
  item: ChildProfileItem;
}

const ChildProfileCard: React.FC<ChildProfileCardProps> = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      {item.streak && (
        <Flex
          style={styles.streakCont}
          gap={3}
          alignItems="center"
          justifyContent="center">
          <SVGS.StreakIcon />
          <Typography size={12} color={Colors.textV2} bold>
            02
          </Typography>
        </Flex>
      )}
      <View style={styles.cardContent}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={gradientColors}
          style={styles.linearCont}>
          <Image source={{uri: item.image}} style={styles.image} />
        </LinearGradient>

        <View style={styles.infoContainer}>
          <Typography mT={12} size={12} color={Colors.purpleV2}>
            Level {item?.level}
          </Typography>

          <Typography mT={4} size={14} bold color={Colors.textV2}>
            {item?.name}
          </Typography>

          <Flex mT={4} gap={5}>
            <SVGS.ProfileCardAge />
            <Typography color={Colors.darkblue} medium size={12}>
              Age: {item?.age}
            </Typography>
          </Flex>
        </View>
      </View>
    </View>
  );
};

export default ChildProfileCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: Metrix.HorizontalSize(155),
    height: Metrix.VerticalSize(217),
    backgroundColor: Colors.whiteV2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.greyV4,
    marginBottom: Metrix.VerticalSize(20),
    paddingVertical: Metrix.VerticalSize(20),
    paddingHorizontal: Metrix.HorizontalSize(17),
  },
  streakCont: {
    width: Metrix.HorizontalSize(40),
    height: Metrix.VerticalSize(23),
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10,
    borderRadius: Metrix.Radius,
  },
  linearCont: {
    borderRadius: 10,
    padding: Metrix.VerticalSize(2),
  },
  cardContent: {
    width: '100%',
    height: '100%',
  },
  image: {
    height: Metrix.VerticalSize(107),
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
