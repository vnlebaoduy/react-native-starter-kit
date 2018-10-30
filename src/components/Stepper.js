import React, { PureComponent } from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View`
  background-color: #745CBF;
  opacity: ${props => (props.active ? 1 : 0.5)};
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size * 0.5};
  margin: 0 4px;
`;


export default class Stepper extends PureComponent {
  static propTypes = {
    index: number.isRequired,
    size: number.isRequired,
  }

  renderDot = (_, key) => {
    const { index } = this.props;
    const size = key === index ? 16 : 8;
    const isActive = key <= index;

    return <Dot size={size} active={isActive} key={key} />;
  }

  render() {
    const { size } = this.props;

    return (
      <Row>
        {[...Array(size)].map(this.renderDot)}
      </Row>
    );
  }
}
