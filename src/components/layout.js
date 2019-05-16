import React, { Component } from 'react';

import Header from './header/header';
import Navbar from './header/navbar';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus, faMinus, faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faPlus, faMinus, faTimes, faShoppingCart);

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;