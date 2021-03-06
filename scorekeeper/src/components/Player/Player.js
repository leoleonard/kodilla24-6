import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <div className='Score'>
        <span className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</span>
        <span className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
        <span className="Player__button_delete" onClick={() => props.onPlayerRemove()} >x</span>
    </div>
        
  </li>
);



export default Player;