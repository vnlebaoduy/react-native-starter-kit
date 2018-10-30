import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components';

const IconWrapper = styled.View`
    padding-left: 12;
`;

export default function DrawerMenu({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={navigation.openDrawer}>
      <IconWrapper>
        <MaterialIcons name="menu" color="#fff" size={24} />
      </IconWrapper>
    </TouchableWithoutFeedback>
  );
}
