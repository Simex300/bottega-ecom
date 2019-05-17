import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

import OrderSummary from './orderSummary';

class ShippingForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className='shipping-form__name' name='name' title='Name' placeholder='Name' type='text' component={FormInput}/>
                <Field className='shipping-form__address' name='street-address' title='Street Address' placeholder='Street Address' type='text' component={FormInput}/>
                <Field className='shipping-form__city' name='city' title='City' placeholder='City' type='text' component={FormInput}/>

                <Field className='shipping-form__state' name='state' title='State' placeholder='State' type='text' component={FormInput}/>
                <Field className='shipping-form__zipcode' name='zipcode' title='Zipcode' placeholder='Zipcode' type='text' component={FormInput}/>
                <div className='shipping-form__line'></div>
                <Field className='shipping-form__confirm' onClick={() => history.push('/infomation/payment')} name='confirm' title='Confirm Address' type='submit' component={FormButton}/>
                <Field className='shipping-form__back' onClick={() => history.push('/')} name='back' title='Back' type='button' short={true} component={FormButton}/>
                <OrderSummary className='shipping-form__details'/>
            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);

export default ShippingForm;