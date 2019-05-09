import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PurchaseHistory from './purchaseHistory';
import AccountInfomration from './accountInformation';

class Account extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([
            {
                title: 'Shop'
            },
            {
                title: 'Logout'
            }
        ]);
        
        this.props.setNavbarLinks([
            {
                title: 'Account Information',
                active: true,
                component: <AccountInfomration/>
            },
            {
                title: 'Purchase History',
                active: false,
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