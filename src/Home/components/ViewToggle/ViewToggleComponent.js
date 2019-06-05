import React, {Component} from 'react';
import './ViewToggleComponent.css'
export default class ViewToggleCard extends Component{
    render(){
        return(
            <div id='viewToggleWrapper'>
                <div id='viewToggleCard'>
                    <div id='list_icon'>
                    </div>
                    <button id='homePageButton'>Sequential</button>
                </div>
            </div>
        )
    }
}