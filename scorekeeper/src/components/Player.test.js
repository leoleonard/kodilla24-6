import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
  });


//   it('render correct score', () => {
//     const playerScore = 1;
//     const playerComponent = shallow(<Player name={playerScore} />);

//     const playerScoreRender = Number(playerComponent.find('.Player_score').text());

//     expect (playerScoreRender).toEqual(playerScore);
//   });
