import React, { Component } from 'react';

import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <img className='header__img' src='http://via.placeholder.com/50x50' />
                <div className='header__links'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a key={index} className='navbar__link' onClick={() => console.log("Switchin Tabs")}>{link.title}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);

export default Header;