import React, { Component } from 'react';

import SigninForm from './signinForm';

class Signin extends Component {
    onSubmit = (fields) => {
        console.log("Fields:", fields);
    }

    render() {
        return(
            <div className='signin'>
                <SigninForm onSubmit={this.onSubmit} className='signin__form'/>
            </div>
        )
    }
}

export default Signin;