import React, { Component } from "react";
import './App.css';
import Question from "./Component/Question/Question";
import EndGame from "./Component/EndGame/EndGame";
import QuestionsJson from './Questions.json'
import Results from './Component/Results/Results'
import TakeOverComp from './Component/TakeOver/TakeOver'
import ResultsTakeOver from './Component/ResultsTakeOver/ResultsTakeOver'
import HallHelp from './Component/HallHelp/HallHelp'



export default class App extends Component{
  state={
    x:0,
    Count:0,
    CounRightAnswer:0,
    StartGame:false,
    StartGameVal:"",
    WinerManyCount:0,
    Questions:QuestionsJson,
    openResults:false,
    TakeOver:false,
    DeletFalseAnswer:false,
    disabledBtn:false,
    CallFriendDiv:false,
    CallFriendDisabld:false,
    ResultsTakeOver:false,
    Call:'',
    HallHelp:false,
    HallHelpDisablid:false,
    Liders:[
      {
        id:0,
        Name:"Poxos",
        WinMany:200,
        TimeForStart:37,
      },
      {
        id:1,
        Name:"Petros",
        WinMany:400,
        TimeForStart:47,
      },
      {
        id:2,
        Name:"Martiros",
        WinMany:600,
        TimeForStart:57,
      },
    ],
  }


  
  AnswerBtn=(elem,e)=>{
    this.state.DeletFalseAnswer = false
    this.state.CallFriendDiv = false
    this.state.HallHelp = false
    if(elem.RightAnswer){
      this.state.CounRightAnswer++
      elem.classRightAnswer='ClassRightAnswers'
      this.state.WinerManyCount = this.state.Questions[this.state.Count].WinerMany
      this.setState({})
      if(this.state.x == this.state.Questions.length -1){
        this.state.Liders.push(
          {
            id:this.state.Liders.length,
            Name:this.state.StartGameVal,
            WinMany:this.state.WinerManyCount,
            TimeForStart:27,
          }
        )
        this.setState({})   
      }
    }else{
      var x = e.Answers.find(k=>k.RightAnswer === true)
      elem.classRightAnswer='ClassWrongAnswers'
      if(this.state.Count == 1){
        this.state.WinerManyCount = this.state.Questions[0].FixMany
      }
      if(this.state.Count == 0){
        this.state.WinerManyCount = this.state.Questions[0].FixMany
      }
      this.state.Liders.push(
        {
          id:this.state.Liders.length,
          Name:this.state.StartGameVal,
          WinMany:this.state.WinerManyCount,
          TimeForStart:27,
        }
      )
      this.setState({})

      setTimeout(()=>{
        x.classRightAnswer='ClassRightAnswers'
        setTimeout(()=>{
          this.state.x = this.state.Questions.length  
        },100)
        this.setState({})
      },500)
    }
    setTimeout(()=>{
      this.state.Count++
      this.setState({})
    },900)
    if(this.state.Count == 1){
      this.state.Questions[this.state.Count].FixMany = this.state.WinerManyCount 
    }
    this.state.x++
    this.setState({})
  }



  startGameChange = (k) =>{
    this.setState({
      StartGameVal:k.target.value
    })
  }


  startGameBtn = () =>{
    if(this.state.StartGameVal.trim().length < 12){
      this.state.StartGame =!this.state.StartGame
    }else{
      alert('dzer Anuny petqe lini 4-ic mec ev 12-ic poqr')
    }  
    this.setState({})
  }


  OpenResults = () =>{
    this.state.OpenResults=!this.state.OpenResults
    this.state.Liders.sort((x,y) =>{
      if(y.WinMany !== x.WinMany){
        return y.WinMany - x.WinMany
    }else{
     return x.TimeForStart - y.TimeForStart
    }
    })
    this.setState({})
  }

  CloseResults = () =>{
    this.state.OpenResults=!this.state.OpenResults
    this.setState({})
  }

  ReplayBtn = () =>{
   for(var i = 0; i < this.state.Questions.length; i ++){
     for(var j = 0; j < this.state.Questions[i].Answers.length; j++){
       if(this.state.Questions[i].Answers[j].classRightAnswer !== ""){
        this.state.Questions[i].Answers[j].classRightAnswer = ''
        this.setState({})
       }
     }
   }
   this.state.x=0
   this.state.Count=0
   this.state.StartGame=false
   this.state.StartGameVal=""
   this.state.CounRightAnswer=0
   this.state.TakeOver=false
   this.state.disabledBtn = false
   this.setState({})
  }


  TakeOver = () =>{
    this.state.TakeOver =! this.state.TakeOver
    this.state.x = this.state.Questions.length
    this.setState({})
  }

  ReplayTakeOver = () =>{
    for(var i = 0; i < this.state.Questions.length; i ++){
      for(var j = 0; j < this.state.Questions[i].Answers.length; j++){
        if(this.state.Questions[i].Answers[j].classRightAnswer !== ""){
         this.state.Questions[i].Answers[j].classRightAnswer = ''
         this.setState({})
        }
      }
    }
    this.state.x=0
    this.state.Count=0
    this.state.StartGame=false
    this.state.StartGameVal=""
    this.state.TakeOver =false
    this.state.CounRightAnswer=0
    this.state.disabledBtn = false
    this.state.HallHelp = false
    this.setState({})
  }


  DeletFalseAnswer = () =>{
    this.state.disabledBtn=true
    this.state.DeletFalseAnswer = true
    this.setState({})
  }

  CallFriend = () =>{
    this.state.CallFriendDiv = true
    this.state.CallFriendDisabld = true
    this.state.Call = this.state.Questions[this.state.Count].Answers.find(k=>k.RightAnswer )
    this.setState({})
  }

  CloseCallFriend = () =>{
    this.state.CallFriendDiv =! this.state.CallFriendDiv
    this.setState({}) 
  }


  ResultsTakeOver = () =>{
    this.state.ResultsTakeOver =! this.state.ResultsTakeOver 
    this.setState({})
  }

  
  closeTakeOverResults=()=>{
    this.state.ResultsTakeOver =! this.state.ResultsTakeOver 
    this.setState({})
  }

  HallHelp =() =>{
    this.state.HallHelp =! this.state.HallHelp
    this.state.HallHelpDisablid = true
    this.setState({})
  }

  CloseHallHelp = () =>{
    this.state.HallHelp =! this.state.HallHelp
    this.setState({})
  }


  render(){
  return(
    <>

    {/* Count Right Answe Div */}
    {this.state.StartGame ? 
    <>
      <div className="RightAnswerCount">
        <p>{this.state.CounRightAnswer}</p>
      </div>

      {/* TakeOver btn btn */}
      <button 
        onClick={this.TakeOver} 
        disabled={this.state.Count === 0 ? true:false} 
        className="btn btn-outline-primary">Take Over</button><br/>

        {/* CallFriend btn */}
        <button 
        disabled={this.state.CallFriendDisabld}
        className="CallFriend btn btn-outline-primary "
        onClick={this.CallFriend}
        ><i class="fa fa-phone"></i></button><br/>

        {/* 50%50 btn */}
        <button
          disabled={this.state.disabledBtn}
          onClick={this.DeletFalseAnswer}
          style={{marginTop:"10px"}}
          className=" btn btn-outline-primary">50%50</button><br />

        {/* HallHelp Btn */}
          <button 
          style={{marginTop:"10px"}} 
          disabled={this.state.HallHelpDisablid}
          className="btn btn-outline-primary"
          onClick={this.HallHelp}><i class="fa fa-users"></i></button>
      </> 
    :null}

   
      {/* TakeOver komponent */}
      {this.state.TakeOver ? 
      <TakeOverComp 
        ResultsTakeOver={this.ResultsTakeOver} 
        ReplayTakeOver={this.ReplayTakeOver} 
        StartGameVal={this.state.StartGameVal} 
        WinerManyCount={this.state.WinerManyCount} />
    :null}


  
    {/* Start Game btn and inp */}
    {!this.state.StartGame? 
      <div className="startGame">
      <div className="StartGameChild">
        <h1 style={{color:"white",fontSize:"45px"}}>Start Game</h1>
        <input onChange={this.startGameChange} value={this.state.StartGameVal} className="form-control" placeholder="Enter Your Name" />
        <button className="btn btn-success" onClick={this.startGameBtn}>Start</button>
      </div>
    </div>
    :null}

   
     {/* Call Friend Div */}
     {this.state.CallFriendDiv ? 
      <div className="CallFrendMin">
        <button onClick={this.CloseCallFriend} className="CloseCallFriend">X</button>
        <div className="CallFrend">
          <h3>Ձեր ընկերը ասում է որ ճիշտ պատասխանն է՝</h3>
          <h1>{ this.state.Call.Answer }</h1>
        </div>
      </div>
     :null}

    

      {/* End Game payman u component */}
      {this.state.x == this.state.Questions.length ?
        <EndGame WinerManyCount={this.state.WinerManyCount} ReplayBtn={this.ReplayBtn} OpenResults={this.OpenResults} />
        :
        <Question
        DeletFalseAnswer={this.state.DeletFalseAnswer}
          StartGame={this.state.StartGame}
          AnswerBtn={this.AnswerBtn}
          e={this.state.Questions[this.state.Count]} 
          i={this.state.Count} 
          x={this.state.x}
        />
      }



      {/* Open Results Div */}
      {this.state.OpenResults ? 
        <Results CloseResults={this.CloseResults}  Liders={this.state.Liders} />
      :null}

      {this.state.ResultsTakeOver ? <ResultsTakeOver closeTakeOverResults={this.closeTakeOverResults} Liders={this.state.Liders}
      /> :null }


      {this.state.HallHelp ? <HallHelp CloseHallHelp={this.CloseHallHelp} Count={this.state.Count} Questions={this.state.Questions} /> :null}

    </>
  )
  }
}
