import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../common/details';

import history from '../../history';

class SignupForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                title: 'Not registered? Create account here',
                onClick: () => history.pushState('/signup')
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
            <form onSubmit={handleSubmit} className={`${className} signup-form`}>
                <Field className='signup-form__name' name='name' title='Name' placeholder='Name' type='text' component={FormInput}/>
                <Field className='signup-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='signup-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
                <Field className='signup-form__confirm-password' name='confirm' title='Confirm Password' placeholder='Confirm Password' type='password' component={FormInput}/>
                <div className='signup-form__line'></div>
                <Field className='signup-form__login-btn' onClick={() => console.log('Submitting Login!')} name='login' title='Login' type='submit' component={FormButton}/>
                <Field className='signup-form__login-btn' onClick={() => console.log('Back')} name='back' title='Back' type='button' short={true} component={FormButton}/>
                <Details className='signup-form__details' title='Quick Links' links={links} />
            </form>
        )
    }
}

SignupForm = reduxForm({
    form: 'SignupForm'
})(SignupForm);

export default SignupForm;