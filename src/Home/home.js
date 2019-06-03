import React, {Component} from 'react';
import './home.css'
import SearchComponent from './components/SearchComponent'
import TimeLineView from './components/TableView';
export default class HomeComponent extends Component{
    render(){
        return(
                <body className='homeWrapper'>
                    <SearchComponent/>
                    <TimeLineView/>
                </body>
        )
    }
}
