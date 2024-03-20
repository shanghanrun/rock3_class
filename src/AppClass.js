import React, {Component} from 'react'
import './App.css';
import ButtonClass from './components/ButtonClass';
import BoxClass from './components/BoxClass';

const types = ['rock', 'scissors', 'paper']
const smallImages=['/img/r1.png', '/img/s1.png', '/img/p1.png']
const bigImages =['/img/rock.png', '/img/scissors.png', 'img/paper.png']

export default class AppClass extends Component {
  constructor(props){
    super(props)
    this.state={
      user: null,
      computer: null,
      result:"Tie",
      score: {user:0, computer:0}
    }
  }

  setUser=(val)=>{this.setState({user: val}) };
  setComputer=(val)=>{this.setState({computer: val})}
  setResult=(val)=>{this.setState({result: val})}
  setScore=(val)=>{this.setState({score: val})}

  getComputer=()=>{
      const index = Math.floor(Math.random()*types.length)
      const type = types[index]
      const image = bigImages[index]
      return [type, image];
    }
  judgement=(userChoice, computerChoice)=>{
      if(userChoice == computerChoice){
        return 'Tie' 
      } else if (userChoice=='rock'){
        return computerChoice == 'scissors'? 'Win':'Lose'
      } else if (userChoice =='scissors'){
        return computerChoice =='rock'?"Lose":"Win"
      } else if(userChoice =='paper'){
        return computerChoice=='rock'? "Win":"Lose"
      }
    }
  play=(type)=>{
      const userChoice = type;
      let index;
      if(type==='rock'){index=0 }
      else if(type ==='scissors'){index=1}
      else {index=2}
      console.log(`${type}, ${index} 클릭됨`)
      const [computerChoice, computerImage] = this.getComputer()
      let result = this.judgement(userChoice, computerChoice)
      if (result== 'Win'){
        this.setScore({...this.state.score, user: this.state.score.user+1})
        this.setUser({...this.state.user, name:type, image:bigImages[index],status:'Win'})
        this.setComputer({...this.state.computer,name:computerChoice, image:computerImage, status:"Lose"})
        this.setResult(result)
      } else if(result =='Lose'){
        this.setScore({...this.state.score, computer: this.state.score.computer+1})
        this.setUser({...this.state.user, name:type, image:bigImages[index],status:'Lose'})
        this.setComputer({...this.state.computer, name:computerChoice, image:computerImage,status:"Win"})
        this.setResult(result)
      } else{
        this.setUser({...this.state.user, name:type, image:bigImages[index],status:'Tie'})
        this.setComputer({...this.state.computer, name:computerChoice, image:computerImage,status:"Tie"})
        this.setResult(result)
      }  
    }
    reset=()=>{ 
      this.setResult('Tie')
      this.setScore({user:0,computer:0})
      this.setUser({name:'paper', image:'/img/paper.png', status:''})
      this.setComputer({name:'paper', image:'/img/paper.png', status:''})
    }
  
  
  render(){
    return (
      <div>
        <div className="container">
          <div className="score" >스코어: {this.state.score.user} : {this.state.score.computer}</div>
          <div className="boxes">
            <BoxClass who={this.state.user}  />
            <BoxClass who={this.state.computer} />
          </div>
          <div className="result">{this.state.result}</div>
          <div className="buttons" >
            {smallImages.map((img, index)=>
              <ButtonClass onClick={()=>this.play(types[index])} key={index} img={img} />
            )}
            <button className="reset" onClick={this.reset}>reset</button>
          </div>
        </div>
      </div>
    );
  }
}  
