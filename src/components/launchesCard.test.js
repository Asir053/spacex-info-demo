import { React } from 'react';
import ReactDOM from 'react-dom';
import LaunchesCard from './launchesCard';
import render from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LaunchesCard></LaunchesCard>, div);
});

it('renders card correctly', () => {
  const { getByTestID } = render(
    <LaunchesCard mission_name={'FalconSat'}></LaunchesCard>
  );
  expect(getByTestID('launchesCard')).toHaveTextContent('FalconSat');
});
