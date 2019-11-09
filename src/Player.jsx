import React from 'react'

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            playerNr: props.playerNr,
            played: parseInt(props.played)
        };

    }

    clickHandler=()=>{

        this.props.changePlayer(this.state.playerNr);
        this.setState({played:this.state.played+1});

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