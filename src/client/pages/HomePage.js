import React from 'react';
import { Link } from 'react-router-dom';
import { vhcenter } from '@/stylesheets/utils';

const Home = () => {

  return (
    <div style={vhcenter}>
      <h3>Welcome</h3>
      <p>check out these awesome features</p>
    </div>
  )
}

export default {
  component: Home
};
