import React from 'react'
import './TakeOver.css'

export default (props) =>{
    return(
        <div className="TakeOver">
           <div className="TakeOverChild">
                <h1>We Have Winer</h1>
                <h2>{props.StartGameVal} You Win {props.WinerManyCount}$</h2>
                <button onClick={props.ReplayTakeOver} className="btn btn-outline-primary">Replay</button>
                <button onClick={props.ResultsTakeOver} className="btn btn-outline-primary">Results</button>
           </div>
        </div>
    )
}