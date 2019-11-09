import React from 'react'

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            playerNr: props.playerNr,
            played: 0,
        };

    }

    clickHandler=()=>{

        this.props.changePlayer(this.state.playerNr);
    }
    
    render(){
        return(
            <div>
        <div>Player{this.state.playerNr}</div>
        
        <div>Name {this.props.playerName}</div>
        
        <div>Played number of times: {this.state.played}
        <button onClick={this.clickHandler} disabled={!this.label=='play'}>{this.props.label}</button>
        </div>
        </div>)
        
    }
    
}

export default Player