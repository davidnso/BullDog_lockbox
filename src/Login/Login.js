import React, { Component } from 'react';
import './login.css'

import LoginModal from './components/LoginModal'
export class LoginComponent extends Component{
    render(){
        return (
            <body id='main' background='../resources/backgrounds/lockbox_background.jpg' >
                <div >
                    <LoginModal/>
                </div>
            </body>
        )
    }
}

export default LoginComponent