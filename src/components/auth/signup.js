import React, { Component } from 'react';

import SignupForm from './signupForm';
import PageTitle from '../common/pageTitle';

class Signup extends Component {
    onSubmit = (fields) => {
        console.log("Fields:", fields);
    }

    render() {
        return(
            <div className='signup'>
                <PageTitle className='signup__title' title='Register'/>
                <SignupForm onSubmit={this.onSubmit} className='signup__form'/>
            </div>
        )
    }
}

export default Signup;