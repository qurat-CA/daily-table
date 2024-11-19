import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {NavigationService} from './config';
import {MainStack} from './navigation';

export const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
