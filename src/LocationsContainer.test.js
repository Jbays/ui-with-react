import React from 'react';
import ReactDOM from 'react-dom';
import LocationsContainer from './LocationsContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocationsContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
