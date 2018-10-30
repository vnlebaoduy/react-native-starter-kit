import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import DialogProvider from 'components/Dialog';
import store, { persistor } from 'store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { rootStack } from 'scenes/constants';
import { changeScene, getInstance } from 'scenes/api';
import logger from 'utils/logger';

export default function sceneWrapper(AnotherComponent, sceneProps, useRedux, ...props) {
  return class SceneWrapper extends PureComponent {
    render() {
      const componentProps = {
        consoleLog: logger,
        navigation: {
          stack: rootStack,
          changeScene,
          instance: getInstance,
          ...sceneProps,
        },
      };

      if (useRedux) {
        return (
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <DialogProvider>
                <AnotherComponent
                  {...componentProps}
                  {...{
                    ...this.props,
                    ...props,
                  }}
                />
              </DialogProvider>
            </PersistGate>
          </Provider>
        );
      }

      return (
        <DialogProvider>
          <AnotherComponent
            {...componentProps}
            {...{
              ...this.props,
              ...props,
            }}
          />
        </DialogProvider>
      );
    }
  };
}
