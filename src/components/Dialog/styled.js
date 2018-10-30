import styled from 'styled-components';
import {
  sizeDefault,
  sizeLarge,
  borderRadius,
  colorPrimary,
  fontSizeNormal,
  fontSizeLarge,
  colorGray,
  backgroundColor,
  fontFamilyBold,
  fontFamilyMedium,
} from 'styles/constants';

export const Container = styled.View`
  padding: ${sizeLarge};
  border-radius: ${borderRadius};
  background-color: ${backgroundColor};
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: ${sizeDefault};
`;

export const Title = styled.Text`
  font-family: ${fontFamilyBold};
  font-size: ${fontSizeLarge};
  text-align: center;
  margin: ${sizeDefault} 0;
  color: ${colorPrimary};
`;

export const Message = styled.Text`
  font-family: ${fontFamilyMedium};
  font-size: ${fontSizeNormal};
  text-align: center;
  color: ${colorGray};
`;
