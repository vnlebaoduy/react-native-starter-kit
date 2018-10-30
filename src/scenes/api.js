import { Navigation } from 'react-native-navigation';
import {
  PUSH, POP, SHOW_MODAL, SET_STACK_ROOT, POP_TO_ROOT,
} from 'scenes/constants';

export function getInstance() {
  return Navigation;
}

export function changeScene(previousScene, nextScene, passProps = {}, type = PUSH) {
  const {
    id,
    options: {
      topBar: {
        visible, title, subtitle, back, drawBehind,
      },
    },
  } = nextScene;

  const nextSceneProps = {
    component: {
      name: id,
      passProps,
      options: {
        backButton: {
          visible: back || true,
        },
        topBar: {
          visible,
          title: {
            text: title || '',
          },
          drawBehind,
          subtitle: {
            text: subtitle || '',
          },
        },
      },
    },
  };

  const {
    component: { options },
  } = nextSceneProps;

  switch (type) {
    default:
    case PUSH:
      return Navigation.push(previousScene, nextSceneProps);

    case SHOW_MODAL:
      return Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: id,
                options,
              },
            },
          ],
        },
      });

    case POP:
      return Navigation.pop(previousScene);

    case POP_TO_ROOT:
      return Navigation.popToRoot(previousScene);

    case SET_STACK_ROOT:
      return Navigation.setStackRoot(previousScene, nextSceneProps);
  }
}
