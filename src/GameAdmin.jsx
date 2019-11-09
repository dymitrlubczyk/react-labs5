import React from 'react'
import Player from './Player'

class GameAdmin extends React.Component {
    constructor(props){
        super(props);
        /* 
         * State służy do trzymania danych, które mają być 'reactive', 
         * czyli takich, któych zmiana ma wywołać update. Dlatego nie pasuje mi
         * tutaj 'userNLabel'. Lepszą metodą byłoby mieć `state = { currentUserId: 1, ... }`
         * i wtedy twoje changePlayer by wyglądało tak `id => this.setState({ currentUserId: id })`.
         * Zamiast trzmać label w `state`, możesz go przypisać bezpośrednio do obiektu - dajesz w
         * konstruktorze `this.activePlayerLabel = 'user is playing now'`. Następnie do komponentu
         * Player podajesz dobry label:
         * `label={this.state.currentUserId === 1 ? this.activePlayerLabel : this.inactivePlayerLabel}`
         */
        this.state={
            user1Name: '',
            user2Name: '',
            user1Score: 0,
            user2Score: 0,
            user1Label:'user is playing now',
            user2Label:'play'
            // currentUserId: 1
        }
        // this.activePlayerLabel = 'user is playing now'
    }
    
    // changePlayer = id => this.setState({ currentUserId: id }) 

    changePlayer=(playerNr)=>{
        

        if(playerNr=='1')
        {
            this.setState({
                user1Label:'user is playing now',
                user2Label:'play'
            })
        }

        else
        {
            this.setState({
                user1Label:'play',
                user2Label:'user is playing now'
            })
        }
    }

    render() {
        /* Formatowanie - polecam być consistent w indentacji.
         * W Player masz: 
         * <Component attr1='..' attr2='...'
         * attr3='...' attr4='...'/>
         * A w input: (tak jest lepiej)
         * <Component
         *     attr1='...'
         *     attr2='...
         * />
         */
        
        // Jak bym to przerobił, żeby można było obsługiwać dowolne N Playerów:
        // Object.keys([...Array(N)].map(n => (
        //   <Player 
        //       playerNr={n} 
        //       playerName={this.state[`user${n}Name`]}
        //       onChange={this.changePlayer} 
        //       ...
        //   />
        // ))
        // `obj.attr` to jest to samo co `obj['attr']`
        // `str${a}str` to jest to samo co 'str' + a + 'str'
       return ( 
           <>
           {/* tab */}<Player playerNr='1' playerName={this.state.user1Name} 
           changePlayer={this.changePlayer} label={this.state.user1Label} played='1'/>
           
           {/* tab */}<Player playerNr='2' playerName={this.state.user2Name} 
           changePlayer={this.changePlayer} label={this.state.user2Label} played='0'/>
           
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
