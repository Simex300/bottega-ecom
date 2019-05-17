import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { connect } from 'react-redux';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';
import OrderSummary from './orderSummary';
import { UnderlinedTitle } from './informationDetail';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name' name='name' title='Name on Credit Card' placeholder='Name' type='text' component={FormInput}/>
                <Field className='payment-form__card' name='card' title='Credit Card Number' placeholder='____-____-____-____' type='text' component={FormInput}/>
                <Field className='payment-form__expiration' name='expiration' title='Expiration Date' placeholder='MM/YYYY' type='text' component={FormInput}/>
                <Field className='payment-form__ccv' name='ccv' title='CCV' placeholder='CCV' type='text' component={FormInput}/>
                <div className='shipping-form__line'></div>
                <Field className='payment-form__confirm' onClick={() => history.push('/shop')} name='confirm' title='Proceed Payment' type='submit' component={FormButton}/>
                <Field className='payment-form__back' onClick={() => history.push('/information/shipping')} name='back' title='Back' type='button' short={true} component={FormButton}/>
                <OrderSummary className='payment-form__details'/>
                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To' />
                    <div className='shipping-info__name small-text'>{this.props.name}</div>
                    <div className='shipping-info__address small-text'>{this.props.address}</div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    const { name, address } = state.user.user;
    return { name, address };
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);


export default PaymentForm;