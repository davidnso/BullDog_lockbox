import Timeline from 'react-visjs-timeline'
import React, {Component} from 'react'
import './TableView.css'

const CSS_String = 'margin-top:50px;'
const options = {
    width: '85%',
    height: '700px',
    stack: true,
    showMajorLabels: true,
    showCurrentTime: true,
    zoomMin: 1000000,
    type: 'box',
    format: {
      minorLabels: {
        minute: 'h:mma',
        hour: 'ha'
      }
    },
    style: CSS_String
  }
  const items = [{
    start: new Date(2010, 7, 15),
    content: 'Trajectory A',
  },
  {
    start: new Date(2010, 7, 15),
    content: 'Trajectory A',
  },{
    start: new Date(2010, 7, 17),
    content: 'Trajectory A',
  }]

  export default class TimelineView extends Component{
    render(){
        return(
            <div className='timeline-wrapper'>
            <Timeline className='timeline' options={options} items={items}/>
            </div>
        )
    }
  }