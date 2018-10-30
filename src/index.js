import registerScenes from 'config/registerScenes';
import { Navigation } from 'react-native-navigation';
import { rootStack, splashScene } from 'scenes/constants';
import logger from 'utils/logger';
import navigation from 'styles/navigation';

registerScenes();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions(navigation);
  Navigation.setRoot({
    root: {
      stack: {
        id: rootStack,
        children: [
          {
            id: splashScene.id,
            component: {
              name: splashScene.id,
            },
          },
        ],
      },
    },
  });
});

if (__DEV__) {
  Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
    logger('componentId', componentId);
    logger('componentName', componentName);
  });
}
