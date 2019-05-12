import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='account-information-form__name' name='name' title='Name' placeholder='Name' type='text' component={FormInput}/>
                <Field className='account-information-form__street-address' name='street-address' title='Street Address' placeholder='Street Address' type='text' component={FormInput}/>
                <Field className='account-information-form__city' name='city' title='City' placeholder='City' type='text' component={FormInput}/>

                <Field className='account-information-form__state' name='state' title='State' placeholder='State' type='text' component={FormInput}/>
                <Field className='account-information-form__zipcode' name='zipcode' title='Zipcode' placeholder='Zipcode' type='text' component={FormInput}/>

                
                {/* <Field className='account-information-form__password' name='password' title='Password' placeholder='Password' type='password' component={FormInput}/>
                <div className='account-information-form__line'></div>
                <Field className='account-information-form__login-btn' onClick={() => history.push('/account')} name='login' title='Login' type='submit' component={FormButton}/> */}
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;

