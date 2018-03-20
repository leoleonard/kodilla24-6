import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import PlayersList from '../src/components/PlayersList/PlayersList';
import AddPlayer from '../src/components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    }
  ]

  appComponent.setState({players});

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');
  
  expect(playersAfterUpdate[0].score).toEqual(10);
});

// it('shoudl add a new player to the app', () => {
//   const appComponent = shallow(<App />);

//   const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
//   onPlayerAdd('Ania');

//   const players = appComponent.state('players');

//   expect(players.length).toEqual(1);
//   expect(players[0].name).toEqual('Ania');
//   expect(players[0].score).toEqual(0);
// });

// it('should check if the player is removed from App', () => {
//   const appComponent = mount(<App />);

//   const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
//   onPlayerAdd('Krzysiek');

//   const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
//   onPlayerRemove('Krzysiek');

//   const players = appComponent.state('players');

//   expect(players.length).toEqual(0);
// });