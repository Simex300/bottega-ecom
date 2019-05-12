import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} signin-form`}>
                <Field className='signin-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='signin-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
                <div className='signin-form__line'></div>
                <Field className='signin-form__login-btn' onClick={() => history.push('/account')} name='login' title='Login' type='submit' component={FormButton}/>
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;