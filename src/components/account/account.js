import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PurchaseHistory from './purchaseHistory';
import AccountInfomration from './accountInformation';

class Account extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([
            {
                _id: 0,
                title: 'Shop',
                path: '/shop'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/'
            }
        ]);
        
        this.props.setNavbarLinks([
            {
                _id: 0,
                title: 'Account Information',
                active: false,
                component: <AccountInfomration/>
            },
            {
                _id: 1,
                title: 'Purchase History',
                active: true,
                component: <PurchaseHistory/>
            }
        ]);
    }

    renderContent() {
        let jsx
        if(this.props.navbarLinks) {
            this.props.navbarLinks.map(link => {
                if(link.active) {
                    jsx = link.component;
                }
            })
        }
        return jsx;
    }

    render() {
        return(
            <div className='account'>
                {
                    this.renderContent()
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;