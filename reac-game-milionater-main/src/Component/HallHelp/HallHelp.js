import React from 'react'
import './HallHelp.css'

export default (props) =>{
    return(
        <div className="HallHelpMin">
            <button onClick={props.CloseHallHelp} className="CloseHallHelp">X</button>
            <div className="HallHelpChild">
              {props.Questions[props.Count].Answers.map((element,index)=>{
                  return(
                      <div className="CollMin">
                          <div className="CollMinPercent">{element.Percent}%</div>
                          <div className="CollMinPercentChild2">
                              <div className="CollMinPercentChild" style={{height:`${element.Percent}%`}}> 

                              </div>
                          </div>
                          <div className="CollMin3">
                              <div className="CollMin2"><span>{element.abc}</span></div>
                          </div>
                          
                      </div>
                  )
              })}
            </div>
        </div>
    )
}