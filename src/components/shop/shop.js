import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';

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
    }

    componentDidUpdate(nextProps) {
        if(this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductWithCategoryId(_id));
        }
    }

    onSubmit = (fields) => {
        console.log(fields);
        this.props.filterProductsWithQuery(fields);
    }

    render() {
        return(
            <div className='shop'>
                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar'/>
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct key={product._id} {...product} />
                            )
                        })
                    }
                </div>
                <ShopCart className="shop__cart" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    const { categories, products, filteredProducts } = state.shop;
    return { headerLinks, navbarLinks, categories, products, filteredProducts };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;