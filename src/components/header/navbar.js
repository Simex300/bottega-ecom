import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Navbar extends Component {

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id);
        if(this.props.navbarLinkOnClick) {
            this.props.navbarLinkOnClick(link._id);
        }
    }

    render() {
        return(
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a key={index} className={`navbar__link ${link.active ? 'green-text' : ''}`} onClick={() => this.handleOnClick(link)}>{link.title}</a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { navbarLinks, navbarLinkOnClick } = state.headerNavbar;
    return {
        navbarLinks, 
        navbarLinkOnClick
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar);

export default Navbar;