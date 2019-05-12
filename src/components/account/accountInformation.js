import React, { Component } from 'react';

import PageTitle from '../common/pageTitle';
import AccountInformationForm from './accountInformationForm';

class AccountInfomration extends Component {

    onSubmit = fields => {
        console.log(fields);
    }

    render() {
        return(
            <div className='account-information'>
                <PageTitle className='account-information__title' title="Account Information" />
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form' />
            </div>
        )
    }
}

export default AccountInfomration;