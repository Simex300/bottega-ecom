import React, { Component } from 'react';

import SignupForm from './signupForm';
import PageTitle from '../common/pageTitle';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {

    componentDidMount(){
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

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

Signup = connect (null, actions)(Signup);

export default Signup;