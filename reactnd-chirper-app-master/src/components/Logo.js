import logo from '../icons/logo.svg'
import logo2 from '../icons/redux.svg';
import React from 'react';
const Logo = (props) => {
    return (
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" style={{height:props.size?props.size:'20px'}} />
        <img src={logo2} className="App-logo2" alt="logo" style={{height:props.size?props.size:'20px'}} />
      </div>
    )
  }
  export default Logo;