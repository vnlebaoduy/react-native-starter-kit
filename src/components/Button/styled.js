import styled, { css } from 'styled-components';
import {
  sizeDefault, borderWidth, borderRadius, fontFamilyBold, fontSizeLarge,
} from 'styles/constants';

export const ButtonContainer = styled.View`
  flex-direction: row;
  background-color: ${props => props.background};
  padding: ${sizeDefault};
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};

  ${props => props.outline
    && css`
      border-color: ${props.color || '#fff'};
      border-width: ${borderWidth};
      padding: ${sizeDefault};
    `};
`;

export const Title = styled.Text`
  font-size: ${fontSizeLarge};
  font-family: ${fontFamilyBold};
  font-weight: bold;
  color: ${props => props.color};
`;

export const Icon = styled.View`
  padding-right: ${sizeDefault};
`;
