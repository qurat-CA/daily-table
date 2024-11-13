import {ImageSourcePropType} from 'react-native';

export type ScreenDataType = {
  title: string;
  description: string;
  bgImage: ImageSourcePropType; // Type for image sources like `require()`
  WelcomeImg: React.FC<React.SVGProps<SVGSVGElement>>;
  bgColor: string; // Assuming Colors is a string (e.g., hex, rgb, named colors)
  rotation: string; // The rotation string, e.g., '23deg'
};
