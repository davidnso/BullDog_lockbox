import React, {Component} from 'react'
import './LoginModal.css'
import '../../resources/PNGs/lockbox_logo.png'
export class LoginModal extends Component{ 
    render(){
        return(
            <div className='loginModal'>
               <div id='lockbox_logo'  alt='LockBox'></div>
               <input type='text' placeholder='username'></input>
               <input type='text' id='password' placeholder='**********'></input>
               <button type='submit' className='noSelect'>Submit</button>
               <div id='bulldog'  alt='Bowie Bulldogs'></div>
            </div>
        )
    }
}

export default LoginModal