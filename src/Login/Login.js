import React, { Component } from 'react';
import './login.css'

import LoginModal from './components/LoginModal'
export class LoginComponent extends Component{
    render(){
        return (
            <div id='main' background='../resources/backgrounds/lockbox_background.jpg' >
                <div >
                    <LoginModal/>
                </div>
            </div>
        )
    }
}

export default LoginComponent