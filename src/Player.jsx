import React from 'react'

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            playerNr: props.playerNr,
            played: 0
        };
    }
    render(){
        return(
        <div>
        <div>Player{this.state.playerNr}</div>
        <div>Name</div>
        <div>Played number of times: {this.state.played}<button>button</button></div>
        </div>)
    }
    
}

export default Player