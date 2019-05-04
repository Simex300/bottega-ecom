import React, { Component } from 'react';

import SigninForm from './signinForm';
import PageTitle from '../common/pageTitle';

class Signin extends Component {
    onSubmit = (fields) => {
        console.log("Fields:", fields);
    }

    render() {
        return(
            <div className='signin'>
                <PageTitle className='signin__title' title='Login'/>
                <SigninForm onSubmit={this.onSubmit} className='signin__form'/>
            </div>
        )
    }
}

export default Signin;