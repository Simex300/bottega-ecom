import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        const { className } = this.props;
        return(
            <form className={`${className} signin-form`}>
                <Field className='signin-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='signin-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;