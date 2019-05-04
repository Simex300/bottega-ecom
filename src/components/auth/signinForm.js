import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SigninForm extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} signin-form`}>
                In
            </div>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;