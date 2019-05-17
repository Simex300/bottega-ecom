import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Quantity from '../common/quantity';
import GreenPriceTag from '../common/greenPriceTag';

class ShopProduct extends Component {

    handleAddToCart = () => {
        console.log("Inside!");
        const { _id, title, description, price, belongsTo, imageUrl } = this.props;
        this.props.addCartProduct({ _id, title, description, price, belongsTo, imageUrl }, 1);
    }

    render() {
        const { title, description, price } = this.props;
        return (
            <div className='shop-product'>
                <div className='shop-product__front'>
                    <img className='shop-product__front__image' src='http://via.placeholder.com/220x220' />
                    <div className='shop-product__front__title'>{title}</div>
                </div>
                <div className='shop-product__back'>
                    <div className='shop-product__back__title'>
                        {title}
                    </div>
                    <div className='shop-product__back__description'>
                        {description}
                    </div>
                    <GreenPriceTag className='shop-product__back__price' title={price}/>
                    <Quantity className="shop-product__back__quantity" quantity={1} />
                    <div onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </div>
                </div>
            </div>
        )
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;