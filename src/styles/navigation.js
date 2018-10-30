import {
  colorPrimary, backgroundColor, fontFamilyLight, fontFamilyBold, fontSizeSmall, fontSizeLarge,
} from 'styles/constants';

export default {
  statusBar: {
    visible: true,
    style: 'dark',
  },
  layout: {
    backgroundColor,
    orientation: ['portrait'],
  },
  topBar: {
    visible: false,
    animate: true,
    hideOnScroll: false,
    buttonColor: 'white',
    background: {
      color: colorPrimary,
    },
    drawBehind: true,
    title: {
      text: '',
      fontSize: fontSizeLarge,
      color: 'white',
      fontFamily: fontFamilyBold,
      alignment: 'left',
    },
    subtitle: {
      text: '',
      fontSize: fontSizeSmall,
      color: 'white',
      fontFamily: fontFamilyLight,
      alignment: 'left',
    },
  },
  animations: {
    setRoot: {
      enabled: false,
    },
    push: {
      enabled: false,
    },
    setStackRoot: {
      enable: false,
    },
  },
};
