import React from 'react'
import './ResultsTakeOver.css'

export default (props) =>{
    return(
        <div className="ResultsTakeOverMin">
            <button onClick={props.closeTakeOverResults} className="closeTakeOverResults">X</button>
            <div className="ResultsTakeOverChild">
                {props.Liders.map((e,i) =>{
                    return(
                        <div className="LidersMin2">
                            <div className="Liders2Child"><span>{i+1}.</span></div>
                            <div className="Liders2Child"><span>{e.Name}</span></div>
                            <div className="Liders2Child"><span>{e.WinMany}$</span></div>
                            <div className="Liders2Child"><span>{e.TimeForStart}</span></div>
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}
