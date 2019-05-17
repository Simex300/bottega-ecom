import React, { Component } from 'react';

import history from '../../history';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartProduct from './cartProduct';

function CartButton({className, icon, onClick}) {
    return (
        <div onClick={onClick} className={`${className} cart-button`}>
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

function CartContent({className, products}) {
    let count = products.length;
    let productJSX = products.map((product, index) => <CartProduct {...product} key={index} />);
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
    const subtotal = products.reduce((total, cartProduct) => {
        const { product, quantity } = cartProduct;
        const { price } = product;
        return total + price * quantity;
    }, 0);
    return (
        <div onClick={() => history.push('/order/review')} className={`${className} cart-footer`}>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${subtotal}
            </div>
        </div>
    )
}

class ShopCart extends Component {
    constructor() {
        super();

        this.state = {
            cartHidden: true
        }
    }

    componentDidMount(){
        this.props.fetchCartProducts();
    }

    toggleCartContent = () => {
        if(document.querySelector('.shop-cart__content').classList.contains('cart-hidden')){
            this.setState({cartHidden: false});
            document.querySelector('.shop-cart__content').classList.remove('cart-hidden');
        }
        else {
            this.setState({cartHidden: true});
            document.querySelector('.shop-cart__content').classList.add('cart-hidden');
        }
    }

    render() {
        const { className } = this.props;
        let icon = this.state.cartHidden ? 'shopping-cart' : 'times';
        return (
            <div className={`${className} shop-cart`}>
                <CartButton onClick={this.toggleCartContent} className='shop-cart__toggle' icon={icon}/>
                <CartContent className='shop-cart__content cart-hidden' products={this.props.cartProducts}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;