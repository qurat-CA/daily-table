import {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Container, Flex, StandardButton} from '../../components';
import {Images, Metrix, SVGS} from '../../config';
import {AVATARS} from './data';
import styles from './style';

const SelectAvatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);

  return (
    <Container
      backIcon
      headerTitle="Select An Avatar"
      headerSubText="Select any of the avatar you want to put for your child profile.">
      <Flex mT={32} gap={23} flexWrap="wrap" justifyContent="space-between">
        {AVATARS?.map(({backgroundColor}, i) => (
          <TouchableOpacity
            activeOpacity={Metrix.ActiveOpacity}
            onPress={() => setSelectedAvatar(i)}
            key={i}
            style={styles.container}>
            <View style={[styles.circle, {backgroundColor}]}>
              <Image source={Images.Avatar} style={styles.img} />
              {selectedAvatar == i && (
                <View
                  style={[
                    styles.overlay,
                    {borderRadius: 100, backgroundColor: 'rgba(0, 0, 0, 0.4)'},
                  ]}
                />
              )}
            </View>

            {selectedAvatar === i && (
              <View style={styles.selectedAvatarCont}>
                <SVGS.TickSvg />
              </View>
            )}
          </TouchableOpacity>
        ))}
      </Flex>

      <StandardButton
        useLinearGradient
        onPress={() => {}}
        title="Upload"
        mT={40}
        mB={47}
      />
    </Container>
  );
};

export default SelectAvatar;
