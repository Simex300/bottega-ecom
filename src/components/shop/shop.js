import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Shop extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]);

        this.props.fetchShopCategories();
        this.props.fetchShopProducts();
        
        // this.props.setNavbarLinks([
        //     {
        //         _id: 0,
        //         title: 'Account Information',
        //         active: false,
        //         component: <AccountInfomration/>
        //     },
        //     {
        //         _id: 1,
        //         title: 'Purchase History',
        //         active: true,
        //         component: <PurchaseHistory/>
        //     }
        // ]);
    }

    render() {
        return(
            <div className='shop'>
                Shop
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;