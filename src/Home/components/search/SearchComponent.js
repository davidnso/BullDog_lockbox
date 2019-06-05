import React, {Component} from 'react';
import './Search.css'
export default class LoginSearchComponent extends Component{
    render(){
        return(
            <div id='SearchComponent'>
                <input id='searchField' type='text' placeholder='hello'></input>
            </div>
        )
    }
}