import { Formik, yupToFormErrors } from 'formik';
import { object } from 'prop-types';
import React, { PureComponent } from 'react';

export default function withForm(WrappedComponent) {
  return class FormValidation extends PureComponent {
    static propTypes = {
      initialValues: object,
    };

    static defaultProps = {
      initialValues: {},
    };

    constructor(props) {
      super(props);
      this.input = React.createRef();
    }

    onSubmit = async (values, actions) => {
      const { schema, onSubmit, onValidationFail, context = {} } = this.props;

      const { setErrors, setSubmitting } = actions;

      try {
        const result = await schema.validate(values, {
          abortEarly: false,
          context,
        });
        onSubmit(result, actions);
      } catch (error) {
        const errors = yupToFormErrors(error);
        setErrors(errors);

        if (onValidationFail) {
          onValidationFail(errors, values);
        }
      }
      setSubmitting(false);
    };

    render() {
      const { initialValues } = this.props;

      return <Formik ref={this.input} onSubmit={this.onSubmit} component={WrappedComponent} initialValues={initialValues} />;
    }
  };
}
