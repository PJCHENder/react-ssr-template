import React from 'react';

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
    </div>
  )
}

export default {
  component: Home
};
