import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormButton } from '../formFields';

import history from '../../history';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} review-form`}>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed' onClick={() => history.push('/account')} name='proceed' title='Proceed to Checkout' type='submit' component={FormButton}/>
                <Field className='review-form__back' onClick={() => history.push('/')} name='back' title='Back' type='button' short={true} component={FormButton}/>
            </form>
        )
    }
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;