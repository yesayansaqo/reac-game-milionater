import React from "react";
import './EndGame.css'

export default (props)=>{
    return(
       <div className="EndGame">
           <div className="EndGameChild">
                <h1>Game End</h1>
                <h1>Your Win Many :{props.WinerManyCount} $</h1>
                <button onClick={props.ReplayBtn} className="btn btn-outline-primary">Replay</button>
                <button className="btn btn-outline-primary" onClick={props.OpenResults}>Results</button>
           </div>
       </div>
    )
}