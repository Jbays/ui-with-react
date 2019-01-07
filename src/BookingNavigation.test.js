import React from 'react';
import ReactDOM from 'react-dom';
import BookingNavigation from './BookingNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookingNavigation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
