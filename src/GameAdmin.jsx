import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            player1Name: '',
            player2Name: '',
            player1Score: 0,
            player2Score: 0,
            currentPlayerId: 1
        }

        this.activePlayerLabel='user is playing now'
        this.inactivePlayerLabel='play'
    }

    changePlayer=(playerId)=>{

        this.setState({currentPlayerId: playerId})
    }

    increaseScore=(playerId)=>{
        if(playerId===1)
            this.setState({player2Score: this.state.player2Score+1})

        else
            this.setState({player1Score: this.state.player1Score+1})


    }
    render() {
       return ( 
           <>
                <Player 
                    playerId={1} 
                    playerName={this.state.player1Name} 
                    isActive={this.state.currentPlayerId === 1 }
                    score={this.state.player1Score}
                    changePlayer={this.changePlayer} 
                    increaseScore={this.increaseScore}
                />
           
                <Player 
                    playerId={2} 
                    playerName={this.state.player2Name} 
                    isActive={this.state.currentPlayerId === 2}
                    score={this.state.player2Score}
                    changePlayer={this.changePlayer} 
                    increaseScore={this.increaseScore}
                />
           
                <input
                    type='text'
                    value={this.state.player1Name}
                    onChange={e => this.setState({ player1Name: e.target.value })}
                />
                <input
                    type='text'
                    value={this.state.player2Name}
                    onChange={e => this.setState({ player2Name: e.target.value })}    
                />
                
           </>
        )
    }
}

export default GameAdmin