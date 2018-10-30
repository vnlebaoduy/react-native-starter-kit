import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { authScene } from 'scenes/constants';
import { SET_STACK_ROOT } from 'scenes/constants';
import SplashComponent from './SplashComponent';

export default class Splash extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      changeScene: PropTypes.func.isRequired,
    }).isRequired,
    componentId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const {
      componentId,
      navigation: { changeScene },
    } = this.props;
    setTimeout(() => changeScene(componentId, authScene, SET_STACK_ROOT), 1000);
  }

  render() {
    return <SplashComponent />;
  }
}
