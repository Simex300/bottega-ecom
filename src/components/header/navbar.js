import React, { Component } from 'react';

import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return(
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a key={index} className={`navbar__link ${link.active ? 'green-text' : ''}`} onClick={() => console.log("Switchin Tabs")}>{link.title}</a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;