import React, { Component } from 'react';
import DialogComponent from './DialogComponent';

const DialogContext = React.createContext();

export default class DialogProvider extends Component {
  state = { dialog: null };

  openDialog = (dialog) => {
    this.setState({ dialog });
  };

  close = () => {
    this.setState({ dialog: null });
  };

  render() {
    const { children } = this.props;
    const { dialog } = this.state;

    return (
      <DialogContext.Provider value={this.openDialog}>
        {children}
        <DialogComponent {...dialog} isVisible={!!dialog} close={this.close} />
      </DialogContext.Provider>
    );
  }
}

export function withDialog(WrappedComponent) {
  return function WithDialog(props) {
    const onRef = (elem) => {
      const propsCopy = props;
      propsCopy.ref = elem;
      return propsCopy;
    };
    return <DialogContext.Consumer>{openDialog => <WrappedComponent onRef={onRef} openDialog={openDialog} {...props} />}</DialogContext.Consumer>;
  };
}
