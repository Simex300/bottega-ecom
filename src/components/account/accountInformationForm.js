import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends Component {

    constructor() {
        super()

        this.state = {
            showPassword: false
        }
    }

    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>
                <Field className='account-information-form__email' name='email' title='Email' placeholder='Email' type='email' component={FormInput}/>
                <Field className='account-information-form__name' name='name' title='Name' placeholder='Name' type='text' component={FormInput}/>
                <Field className='account-information-form__street-address' name='street-address' title='Street Address' placeholder='Street Address' type='text' component={FormInput}/>
                <Field className='account-information-form__city' name='city' title='City' placeholder='City' type='text' component={FormInput}/>

                <Field className='account-information-form__state' name='state' title='State' placeholder='State' type='text' component={FormInput}/>
                <Field className='account-information-form__zipcode' name='zipcode' title='Zipcode' placeholder='Zipcode' type='text' component={FormInput}/>
                
                {
                    this.state.showPassword ?
                        [
                            <Field key={0} className='account-information-form__current-password' name='current-password' title='Current Password' placeholder='Current Password' type='password' component={FormInput}/>,
                            <Field key={1} className='account-information-form__new-password' name='new-password' title='New Password' placeholder='New Password' type='password' component={FormInput}/>,
                            <Field key={2} className='account-information-form__confirm-password' name='confirm-password' title='Confirm Password' placeholder='Confirm Password' type='password' component={FormInput}/>,
                            <Field key={4} className='account-information-form__update' onClick={() => console.log("Updating")} name='update' title='Update Information' type='button' component={FormButton}/>,
                            <Field key={5} className='account-information-form__cancel' onClick={() => this.setState({ showPassword: false })} name='cancel' title='Cancel' type='button' short={true} component={FormButton}/>
                        ]
                    :
                        <Field className='account-information-form__change-password' onClick={() => this.setState({ showPassword: true })} name='change-password' labelTitle='Password' title='Change Password' type='button' component={LongGrayButton}/>
                }
                <div key={3} className='account-information-form__line'></div>
                {/* <div className='account-information-form__line'></div> */}
            </form>
        )
    }
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);

export default AccountInformationForm;

