import React from "react";
import ReactDOM from 'react-dom'
import {observable} from 'mobx'

import { observer } from "mobx-react"



//N.B the observable MUST be out of the component
// this is something like state

var timerData = observable({
    secondsPassed: 0
})

// component observer of observable
const Timer = observer((props) =>{
  const {timerData}=props
  return(
    <div>
    <button onClick={()=>{setInterval(() => timerData.secondsPassed++, 1000)}}> START</button>
    <span>Seconds passed: {timerData.secondsPassed} </span>
    </div>
  )
  
})

// Alternatively, a class based component:
// @observer
// class Timer extends React.Component {
//     render() {
//         return <span>Seconds passed: {this.props.timerData.secondsPassed} </span>
//     }
// }

ReactDOM.render(<Timer timerData={timerData} />, document.getElementById('root'))
// playing around in the console
//window.store = store;
