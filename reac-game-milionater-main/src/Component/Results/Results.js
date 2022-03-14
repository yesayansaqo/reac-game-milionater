import React from 'react'
import './Results.css'

export default (props)=>{
    return(
    <div className="Liders">
        <button onClick={props.CloseResults} className="closeLiders">X</button>
        <div className="LidersMine">
            {props.Liders.map((e,i) =>{
                return(
                    <div key={i} className="LidersMine2">
                        <div className="LidersChild"><span>{i+1}.</span></div>
                        <div className="LidersChild"><span>{e.Name}</span></div>
                        <div className="LidersChild"><span>{e.WinMany}$</span></div>
                        <div className="LidersChild"><span>{e.TimeForStart}</span></div>
                    </div>
                )
            })}
        </div>    
    </div>

    )
}