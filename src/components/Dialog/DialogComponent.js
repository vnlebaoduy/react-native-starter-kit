import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import Modal from 'react-native-modal';
import warning from 'images/warning.png';
import Button from 'components/Button';
import { Container, Header, Title, Message } from './styled';

export default function Dialog({
  isVisible, title, message, actionTitle, image, close, onClose,
}) {
  const handleClose = () => {
    close();
    return onClose && onClose();
  };

  return (
    <Modal isVisible={isVisible}>
      <Container>
        <Header>
          <Image source={image} />
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Header>
        <Button title={actionTitle} onPress={handleClose} type="primary" />
      </Container>
    </Modal>
  );
}

Dialog.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  actionTitle: PropTypes.string,
  close: PropTypes.func.isRequired,
  image: PropTypes.any,
  onClose: PropTypes.func, // eslint-disable-line react/require-default-props
};

Dialog.defaultProps = {
  isVisible: true,
  image: warning,
  title: null,
  message: null,
  actionTitle: 'OK',
};
