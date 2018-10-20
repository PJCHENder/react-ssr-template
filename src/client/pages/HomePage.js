import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)'
  }

  return (
    <div style={wrapperStyle}>
      <h3>Welcome</h3>
      <p>check out these awesome features</p>
    </div>
  )
}

export default {
  component: Home
};
