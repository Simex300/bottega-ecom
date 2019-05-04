import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SigninForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='signin-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
                <div className='signin-form__line'></div>
                <Field className='signin-form__login-btn' onClick={() => console.log('Submitting Login!')} name='login' title='Login' type='submit' component={FormButton}/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;