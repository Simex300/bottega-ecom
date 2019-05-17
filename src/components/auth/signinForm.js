import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../common/details';

import history from '../../history';

class SigninForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                title: 'Forgot account email?',
                onClick: () => console.log("Forgot email")
            },
            {
                title: 'Forgot password?',
                onClick: () => console.log("Forgot password")
            }
        ]
        return(
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='signin-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
                <div className='signin-form__line'></div>
                <Field className='signin-form__login-btn' name='login' title='Login' type='submit' component={FormButton}/>
                <Details className='signin-form__details' title='Quick Links' links={links} />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'SigninForm'
})(SigninForm);

export default SigninForm;