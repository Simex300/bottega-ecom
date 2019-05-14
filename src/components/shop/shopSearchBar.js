import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormSearchBar(props){
    return (
        <div className='search-bar-grid'>
            <FontAwesomeIcon className='search-bar-grid__icon' icon="search" />
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder}`}/>
        </div>
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field className='shop-search-bar__form-search-bar' name='query' placeholder='Search' component={FormSearchBar}/>
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;