import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import PageTitle from '../common/pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {
    componentDidMount(){
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        const subtotal = this.props.cartProducts.reduce((total, cartProduct) => {
            const { product, quantity } = cartProduct;
            const { price } = product;
            return total + price * quantity;
        }, 0);
        return(
            <div className='review'>
                <PageTitle className='review__page-title' title='Order Review' />
                <ReviewForm className='review__form' onSubmit={this.onSubmit} subtotal={subtotal}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    };
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;