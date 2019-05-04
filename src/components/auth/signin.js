import React, { Component } from 'react';
import SigninForm from './signinForm';

class Signin extends Component {
    render() {
        return(
            <div className='signin'>
                <SigninForm className='signin__form'/>
            </div>
        )
    }
}

export default Signin;