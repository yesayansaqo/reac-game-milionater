import React from 'react'
import './Question.css'

export default props=>{
    return(
        <>
        {props.StartGame ? 
        <div className="Questions">
            <h1>{props.i+1}. {props.e.Question}</h1>
            <div className="Answers">
                {props.e.Answers.map((elem,index)=>{
                    return(
                        <div key={index} className="Answer" onClick={props.x === props.i ? props.AnswerBtn.bind(this,elem,props.e) : null}>
                            <p className={elem.classRightAnswer}>{elem.QuestionAbc}) {props.DeletFalseAnswer && !elem.delet50_50 ? null : elem.Answer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        :null}
        </>
    )
}