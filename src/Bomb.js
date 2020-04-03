// your Bomb code here!
import React from 'react';
class Bomb extends React.Component {
    
    
  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super()
    
    // console.log(props);
    this.state = {
      secondsLeft:props.initialCount
    }

    console.log(this.state);
  }
    
    
    render(){
      const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        
        return ( <div>{message}</div>
        )

    }
}

export default Bomb;