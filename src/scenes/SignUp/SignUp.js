import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpComponent from './SignUpComponent';

class SignUp extends PureComponent {
  static propTypes = {
    auth: PropTypes.bool,
  };

  static defaultProps = {
    auth: false,
  };

  render() {
    const { auth } = this.props;
    const mapPropsToComponent = {
      auth,
    };
    return <SignUpComponent {...mapPropsToComponent} />;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(SignUp);
