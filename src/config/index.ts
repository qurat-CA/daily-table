import NavigationService from './service/navigation';
import Metrix from './metrix';
import fonts from './fonts';
import {Colors, gradientColors} from './color';
import {Images, SVGS} from './images';

import {
  forgetPasswordSchema,
  signinSchema,
} from './validations/authValidations';
import checkPermission from './permissions';

export {
  NavigationService,
  Metrix,
  Colors,
  fonts,
  SVGS,
  Images,
  forgetPasswordSchema,
  signinSchema,
  gradientColors,
  checkPermission,
};
