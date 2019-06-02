import React, { Component } from 'react';
import './login.css'

import LoginModal from './components/LoginModal'
export class LoginComponent extends Component{
    render(){
        return (
            <body className='main'>
                <div>
                    <LoginModal/>
                </div>
            </body>
        )
    }
}

export default LoginComponent