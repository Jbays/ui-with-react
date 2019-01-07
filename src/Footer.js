import React, { Component } from 'react';
import BookingNavigation from './BookingNavigation';
import PricingBreakdownBar from './PricingBreakdownBar';

class Footer extends Component {
  render() {
    return (
      <div>
        <BookingNavigation/>
        <PricingBreakdownBar/>
      </div>
    );
  }
}

export default Footer;
