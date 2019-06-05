import React, {Component} from 'react';
import './home.css'
import SearchComponent from './components/search/SearchComponent'
import VieWToggleCard from './components/ViewToggle/ViewToggleComponent'
import TimeLineView from './components/TableView';
import ViewToggleCard from './components/ViewToggle/ViewToggleComponent';
export default class HomeComponent extends Component{
    render(){
        return( <div>
            <SearchComponent/>
            <ViewToggleCard/>
                <div class='Timeline_view_wrapper'></div>

                </div>
                
        )
    }
}
