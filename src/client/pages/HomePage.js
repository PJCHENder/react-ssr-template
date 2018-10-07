import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const handleClick = () => {
    console.log('Hi there!')
  }

  return (
    <div>
      <div>
        I'm the home component!
      </div>
      <button onClick={handleClick}>Click Me</button>
      <Link to="/users">
        Users
      </Link>
    </div>
  )
}

export default {
  component: Home
};
