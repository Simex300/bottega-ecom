import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map((cartProduct, index) => {
                       return <ReviewProduct {...cartProduct} key={index} />
                    } )
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

ReviewProducts = connect(mapStateToProps, actions)(ReviewProducts);

export default ReviewProducts;