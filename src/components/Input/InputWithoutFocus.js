import React, { PureComponent } from 'react';
import makeInputGreatAgain from 'react-native-formik';
import { MaskService } from 'react-native-masked-text';
import { TextField } from 'react-native-material-textfield';
import { compose } from 'recompose';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Touchable, InputAction } from './styled';
import styles, { tintColor, textColor } from './styles';

class InputWithoutFocus extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.input = React.createRef();
  }

  focus() {
    this.input.current.focus();
  }

  renderAccessory = () => {
    const { action } = this.props;

    if (action) {
      return (
        <Touchable onPress={action.handler}>
          <InputAction>
            <MaterialCommunityIcons name={action.name} size={24} color={tintColor} />
          </InputAction>
        </Touchable>
      );
    }

    return null;
  };

  render() {
    const { mask, value, error, options } = this.props;
    const optionsCopy = options || {};
    const inputValue = mask ? MaskService.toMask(mask, value || '', optionsCopy) : value;

    return (
      <TextField
        ref={this.input}
        textColor={textColor}
        tintColor={tintColor}
        baseColor={tintColor}
        labelTextStyle={styles.label}
        clearTextOnFocus={false}
        titleTextStyle={error ? styles.error : styles.title}
        style={styles.text}
        {...this.props}
        value={inputValue}
        renderAccessory={this.renderAccessory}
        labelHeight={27}
        containerStyle={{
          height: 59,
        }}
      />
    );
  }
}

export default compose(makeInputGreatAgain)(InputWithoutFocus);
