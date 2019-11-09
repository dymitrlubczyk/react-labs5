import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user1Name: '',
            user2Name: '',
            user1Score: 0,
            user2Score: 0

        }
    }



    render() {
       return ( 
           <>
           <Player playerNr='1' playerName={this.state.user1Name}/>
           <Player playerNr='2' playerName={this.state.user2Name}/>
           
                <input
                    type='text'
                    value={this.state.user1Name}
                    onChange={e => this.setState({ user1Name: e.target.value })}
                />
                <input
                    type='text'
                    value={this.state.user2Name}
                    onChange={e => this.setState({ user2Name: e.target.value })}    
                />
                
           </>
        )
    }
}

export default GameAdmin