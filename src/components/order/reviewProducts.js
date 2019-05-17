import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class ReviewProducts extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map((cartProduct, index) => {
                       return (<h1 key={index}>{cartProduct.product.title}</h1>)
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