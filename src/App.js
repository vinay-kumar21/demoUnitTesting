import React,{useState,Component} from 'react';
import './App.css';

// function App1() {

//   const [count,setCount]=useState(0)

//   return (
//     <div className="App" data-test="component-app">
//       <h1 data-test="counter-display" >The Count is {count}</h1>
//       <button onClick={()=>setCount(count+1)} data-test="increment-button" >
//         Increment Counter
//         </button>
//       <button onClick={()=>setCount(0)} data-test="increment-button">
//         Reset Counter
//         </button>
//     </div>
//   );
// }


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      error:false
     };
  }

  decrement=()=>{
    if(this.state.count ===0){
this.setState({error:true})
    }
    else{
      this.setState({count:this.state.count-1})
    }
    
  }

  increment=()=>{
    if(this.state.error){
      this.setState({error:false})
          }
    this.setState({count:this.state.count+1})
  }
  render(){
    const errorClass = this.state.error ? '' : 'hidden';
    return(
<div data-test="component-app">
<div data-test="error-message" className={`error ${errorClass}`}>
        The counter cannot go below 0
      </div>
  <h1 data-test="counter-display" >Count Value:{this.state.count} </h1>
  <button data-test="increment-button" onClick={this.increment} >
        Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decrement} >
        Decrement Counter
        </button>
</div>
    );
  }
}

export default App;
