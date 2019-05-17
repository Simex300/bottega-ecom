import React, { Component } from 'react';

import SigninForm from './signinForm';
import PageTitle from '../common/pageTitle';

import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
    componentDidMount(){
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        this.props.signIn(fields);
        history.push('/account');
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

Signin = connect (null, actions)(Signin);

export default Signin;