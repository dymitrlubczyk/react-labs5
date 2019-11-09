import React from 'react'

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            playerId: props.playerId,
        };

    }

    clickHandler=()=>{

        this.props.increaseScore(this.state.playerId)
        this.props.changePlayer(this.state.playerId)
    }

    render(){
        return(
        <div>
            <div>Player{this.state.playerId}</div>
            
            <div>Name:{this.props.playerName}</div>
            
            <div>
                Games played: {this.props.score}
                <button onClick={this.clickHandler} disabled={this.props.isActive}>
                    {this.props.isActive ? 'this user is playing' : 'play'}
                </button>
            </div>
        </div>)
        
    }
    
}

export default Player