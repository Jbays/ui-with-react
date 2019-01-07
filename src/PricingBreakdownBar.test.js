import React from 'react';
import ReactDOM from 'react-dom';
import PricingBreakdownBar from './PricingBreakdownBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PricingBreakdownBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
