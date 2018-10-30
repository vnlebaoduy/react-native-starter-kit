export const rootStack = 'root';

export const PUSH = 'push';
export const SHOW_MODAL = 'showModal';
export const POP = 'pop';
export const SET_STACK_ROOT = 'setStackRoot';
export const POP_TO_ROOT = 'popToRoot';

const optionsBlank = {
  options: {
    topBar: {
      visible: false,
      title: false,
      subtitle: false,
      back: false,
      drawBehind: true,
    },
  },
};

export const splashScene = {
  id: 'application.splashScene',
  ...optionsBlank,
};

export const authScene = {
  id: 'application.authScene',
  ...optionsBlank,
};

export const signUpScene = {
  id: 'application.signUpScene',
  ...optionsBlank,
};

export const signOutScene = {
  id: 'application.signOutScene',
  ...optionsBlank,
};

export const drawerComponentScene = {
  id: 'application.drawerComponentScene',
  ...optionsBlank,
};

export default {
  rootStack,
  splashScene,
  authScene,
  signUpScene,
  signOutScene,
  drawerComponentScene,
};
