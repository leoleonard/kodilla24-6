import React, { Component } from 'react';
import './App.css';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        },
        {
          name: 'Antoś',
          score: 0,
        }
      ]
    }
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
          //return Object.assign({}, player, { score: player.score + scoreChange });
        }
        return player;
      })
    })
  }

  onPlayerRemove = (name) => {
    this.setState({
      players: this.state.players.filter((player) => (player.name !== name))
    });
  }

  render() {
    return (
      <div className="App">
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
      </div>
    );
  }
}

export default App;