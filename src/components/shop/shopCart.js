import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartProduct from './cartProduct';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

function CartContent({className, products}) {
    let count = products.length;
    let productJSX = products.map((product, index) => <CartProduct key={index} />);
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>
                Cart ({count})
            </div>
            <div className='cart-content__products'>
                {productJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products}/>
        </div>
    )
}

function CartFooter({className, products}){
    const price = 7.96;
    return (
        <div className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${price}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        return (
            <div className='shop-cart'>
                <CartButton className='shop-cart__toggle' icon='times'/>
                <CartContent className='shop-cart__content' products={[1,2,3]}/>
            </div>
        )
    }
}

export default ShopCart;