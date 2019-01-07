import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

const appHeaderStyles = {
  justifyContent: 'flex-end',
  textAlign: 'center',
  display:'flex',
  padding:'16px 8px',
  alignItems:'center'
}

const pillStyles = {
  margin: '0 1em',
  borderRadius: '100px',
  border: '1px solid #333',
  padding: '15px',
}

const pillLabelStyles = {
  color: '#333',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '.85em',
  textTransform: 'uppercase',
}

const helpStyles = {
  fontSize: '1em',
  textDecoration: 'none',
  color: '#6a6767',
  fontWeight: '400',
  margin: '0 1em',
  whiteSpace: 'nowrap',
}

const bookStyles = {
  color: '#49aaca',
  fontWeight: '500',
  fontSize: '1.14em',
  display:'flex-end'
}

class AppHeader extends Component {
  render() {
    return (
      <div style={appHeaderStyles}>
        <section>
          <MaterialIcon icon='menu'/>
          SILVERCAR by Audi
        </section>
        <section >
          <div style={pillStyles}>
            <a style={pillLabelStyles}>sign up </a>
            | 
            <a style={pillLabelStyles}> log in</a>
          </div>
        </section>
        <a style={helpStyles}>Help </a>
        <div style={bookStyles}>Book Now</div>
      </div>
    );
  }
}

export default AppHeader;
