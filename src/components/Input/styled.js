import styled from 'styled-components';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { sizeHalf, sizeExtraLarge } from 'styles/constants';

export const InputAction = styled.View`
  padding: 0 ${sizeHalf};
  height: ${sizeExtraLarge};
`;

export const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});
