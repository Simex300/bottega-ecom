import React, { Component } from 'react';

import { connect } from 'react-redux';

import { UnderlinedTitle, InfoTitle } from './informationDetail';

class OrderSummary extends Component {
    render() {
        const { className } = this.props;
        const amount = this.props.cartProducts.length;
        const subtotal = this.props.cartProducts.reduce((total, cartProduct) => {
            const { product, quantity } = cartProduct;
            const { price } = product;
            return total + price * quantity;
        }, 0);
        const tax = 0.16;
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-summary__subtotal' title={`${amount} stickers`} value={`$${subtotal}`} />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${tax}`} />
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${tax + subtotal}`} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts };
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;