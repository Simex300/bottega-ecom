import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../common/pageTitle';

class Payment extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    render() {
        return (
            <div className='payment'>
                <PageTitle className={`payment__title`} title='Payment Information' />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;