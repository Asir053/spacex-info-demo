import { React } from 'react';
import ReactDOM from 'react-dom';
import Missions from './missions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Missions></Missions>, div);
});
