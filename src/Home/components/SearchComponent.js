import React, {Component} from 'react';
import './Search.css'
export default class LoginSearchComponent extends Component{ 
    render(){
        return(
            <div id='SearchComponent'>
                <nav></nav>
                <h1>search Component</h1>
                <section className='toggleView'>
                    <div className='option-one'>Table</div>
                    <div className='option-two'>List</div>
                 </section>
                <input id='searchField' type='text'></input>
                <div className='toggleSearch'>
                    <div className='option-name'>Name</div>
                    <div className='option-id'>ID</div>
                    <div className='option-building'>Building</div>
                 </div>
            </div>
        )
    }
}