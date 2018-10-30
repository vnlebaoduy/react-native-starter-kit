import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { string } from 'prop-types';
import { Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { ButtonContainer, Title, Icon } from './styled';
import { colors } from './styles';

const Touchable = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback,
});

export default function Button(props) {
  const { title, type, color, icon } = props;
  const background = colors[type];
  const isOutlined = type === 'outline' || type === 'outlineInverted';
  const { style, ...allProps } = props;

  return (
    <Touchable {...allProps}>
      <ButtonContainer color={color} background={background} outline={isOutlined} style={style}>
        {icon && (
          <Icon>
            <MaterialIcons name={icon} size={24} color={color} />
          </Icon>
        )}
        <Title color={color}>{title}</Title>
      </ButtonContainer>
    </Touchable>
  );
}

Button.propTypes = {
  title: string.isRequired,
  type: string,
  color: string,
};

Button.defaultProps = {
  type: 'normal',
  color: '#fff',
};
