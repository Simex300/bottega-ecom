import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../common/pageTitle';

class Shipping extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    render() {
        return (
            <div className='shipping'>
                <PageTitle className={`shipping__title`} title='Shipping Address' />
            </div>
        )
    }
}

Shipping = connect(null, actions)(Shipping);

export default Shipping;