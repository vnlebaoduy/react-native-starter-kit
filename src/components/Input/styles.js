import {
  fontFamilyRegular, fontFamilyMedium, colorError, colorText, colorHighlight, fontSizeNormal,
} from 'styles/constants';

export const tintColor = colorHighlight;
export const textColor = colorText;

export default {
  label: {
    fontFamily: fontFamilyMedium,
  },
  text: {
    fontFamily: fontFamilyRegular,
  },
  title: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeNormal,
    color: colorText,
  },
  error: {
    fontFamily: fontFamilyRegular,
    fontSize: fontSizeNormal,
    color: colorError,
  },
};
