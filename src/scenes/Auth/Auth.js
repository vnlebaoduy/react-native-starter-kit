import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withDialog } from 'components/Dialog';
import { compose } from 'recompose';
import { signUpScene } from 'scenes/constants';
import AuthComponent from './AuthComponent';

class Auth extends Component {
  static propTypes = {
    user: PropTypes.object,
    authenticated: PropTypes.bool,
    openDialog: PropTypes.func.isRequired,
    consoleLog: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      changeScene: PropTypes.func.isRequired,
    }).isRequired,
    componentId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    user: {},
    authenticated: false,
  };

  signUp = async () => {
    const {
      componentId,
      navigation: { changeScene },
    } = this.props;
    await changeScene(componentId, signUpScene);
  };

  render() {
    const { user, authenticated } = this.props;
    const mapPropsToComponent = {
      user,
      authenticated,
      signUp: this.signUp,
    };
    return <AuthComponent {...mapPropsToComponent} />;
  }
}

function mapStateToProps({ auth: { user, authenticated } }) {
  return {
    user,
    authenticated,
  };
}

const enhance = compose(
  withDialog,
  connect(mapStateToProps),
);

export default enhance(Auth);
