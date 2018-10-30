import { StyleSheet } from 'react-native';

const DEFAULT_SIZE = 10;
const DEFAULT_RADIUS_SIZE = 4;

/* scene */
export const sceneGap = `${DEFAULT_SIZE * 2}px`;
export const sceneGapLarge = `${DEFAULT_SIZE * 4}px`;

/* sizes */
export const sizeHalf = `${DEFAULT_SIZE / 2}px`;
export const sizeDefault = `${DEFAULT_SIZE}px`;
export const sizeLarge = `${DEFAULT_SIZE * 2}px`;
export const sizeExtraLarge = `${DEFAULT_SIZE * 4}px`;

/* border */
export const borderWidth = StyleSheet.hairlineWidth;

/* radius */
export const borderRadius = `${DEFAULT_RADIUS_SIZE / 2}px`;
export const borderRadiusLarge = `${DEFAULT_RADIUS_SIZE * 2}px`;
export const borderRadiusExtraLarge = `${DEFAULT_RADIUS_SIZE * 4}px`;

/* font-size */
export const fontSizeSmall = 12;
export const fontSizeNormal = 14;
export const fontSizeLarge = 16;
export const fontSizeExtraLarge = 20;

/* font-family/weight */
export const fontFamilyThin = 'GilroyThin';
export const fontFamilyUltraLight = 'GilroyUltraLight';
export const fontFamilyLight = 'GilroyLight';
export const fontFamilyRegular = 'GilroyRegular';
export const fontFamilySemibold = 'GilroySemiBold';
export const fontFamilyBold = 'GilroyBold';
export const fontFamilyMedium = 'GilroyMedium';
export const fontFamilyHeavy = 'GilroyHeavy';
export const fontFamilyBlack = 'GilroyBlack';

/* colors */
export const colorPrimary = '#745CBF';
export const colorHighlight = '#8034BF';
export const colorSecondary = '#F9BF3B';
export const colorNormal = colorSecondary;
export const colorDanger = 'rgb(213, 0, 0)';
export const colorError = 'rgb(213, 0, 0)';
export const colorWarning = 'rgb(249, 147, 58)';
export const colorInfo = 'rgb(66, 134, 244)';
export const colorGray = '#6C7A89';
export const colorText = '#9B9B9B';
export const backgroundColor = 'white';

export default {
  gap: {
    sceneGap,
    sceneGapLarge,
  },
  sizes: {
    sizeHalf,
    sizeDefault,
    sizeLarge,
    sizeExtraLarge,
  },
  border: {
    borderWidth,
  },
  radius: {
    borderRadius,
    borderRadiusLarge,
    borderRadiusExtraLarge,
  },
  fontSize: {
    fontSizeSmall,
    fontSizeNormal,
    fontSizeLarge,
    fontSizeExtraLarge,
  },
  fontFamily: {
    fontFamilyThin,
    fontFamilyUltraLight,
    fontFamilyLight,
    fontFamilyRegular,
    fontFamilySemibold,
    fontFamilyBold,
    fontFamilyMedium,
    fontFamilyHeavy,
    fontFamilyBlack,
  },
  colors: {
    colorPrimary,
    colorHighlight,
    colorSecondary,
    colorNormal,
    colorDanger,
    colorError,
    colorWarning,
    colorInfo,
    colorGray,
    colorText,
    backgroundColor,
  },
};
