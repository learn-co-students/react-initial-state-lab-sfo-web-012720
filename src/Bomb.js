import React, { Component } from 'react';

class Bomb extends React.Component {

    // we use the constructor to set the INITIAL STATE
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render (){
        return (
            <div>
                {this.state.secondsLeft === 0? "Boom!" : `${this.state.secondsLeft}` +  " seconds left before I go boom!"} 
            </div>

        )
       
    }
}  

export default Bomb;