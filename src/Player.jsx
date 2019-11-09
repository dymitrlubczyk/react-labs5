import React from 'react'
// import React, { Component } from 'react'
// `class Player extends Component { ... }` (preferencja)

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state={
            playerNr: props.playerNr,
            played: parseInt(props.played)  // Można po prostu podać w propsach inta - `played={2}` zamiast `played='2'`
        };

    }

    clickHandler=()=>{

        this.props.changePlayer(this.state.playerNr);
        this.setState({played:this.state.played+1});  
        /* Skoro dostajesz to z propsów, możesz podać w propsach też `onChange={increasePlayed}`,
         * gdzie `increasePlayed = playerId => this.setState({ ... })`, w komponencie GameAdmin.
         * Wtedy możesz wyoływać tę funkcję poprzez `this.props.onChange(this.props.playerNr)`.
         */
    }

    render(){
        // Formatowanie
        
        /* 
         * BARDZO złe sprawdzanie czy player jest aktywny (`this.label === 'play'`).
         * Co więcej nie zadziała, bo musi być `this.props.label`. Lepiej podać w propsach
         * coś w stylu `isActive`, albo chociaż `currentPlayerId` i sprawdzić 
         * `this.props.playerNr === this.props.currentPlayerId`. Ja bym rekomendował
         * `isActive` i przeniósł nawet labele tutaj - `{this.props.isActive ? 'playing' : 'not playing'}`.
         *
         * Fajnym syntax sugar jest też object spread - `const { playerName, label }  = this.props`.
         * To jest to samo co `const playerName = this.props.playerName; const label = this.props.label`.
         * Wtedy możesz robić `<div>{label}</div>` zamiast `<div>{this.props.label}</div>`.
         * Najlepiej: `const label = this.props.isActive ? 'playing' : 'not playing'` i potem
         * `<button>{label}</button>`
         */
        return(
            <div>
        {/* tab tab */}<div>Player{this.state.playerNr}</div>
        
        {/* tab tab */}<div>Name {this.props.playerName}</div>
        
        {/* tab tab */}<div>Played number of times: {this.state.played}
        {/* tab tab */}<button onClick={this.clickHandler} disabled={!this.label=='play'}>{this.props.label}</button>
        {/* tab tab */}</div>
        {/* tab */}</div>{/* newline */})
        
    }
    
}

export default Player
