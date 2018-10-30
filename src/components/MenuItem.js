import React from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';


const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  background-color: ${props => (props.active ? '#B7A9E0' : '#fff')};
`;

const Content = styled.View`
  flex: 1;
  padding-left: 16px;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: GilroyMedium;
  font-size: 14;
  color: ${props => (props.active ? '#fff' : '#6C7A89')};
`;

export default function MenuItem(props) {
  const {
    onPress, title, icon, active,
  } = props;

  return (
    <Touchable onPress={onPress}>
      <Container active={active}>
        <MaterialIcons name={icon} size={24} color="#8034BF" />
        <Content>
          <Title active={active}>{title}</Title>
        </Content>
      </Container>
    </Touchable>
  );
}

MenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

MenuItem.defaultProps = {
  active: false,
};
