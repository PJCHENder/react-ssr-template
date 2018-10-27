import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { vhcenter } from '@/stylesheets/utils';

const Home = ({ auth }) => {

  function renderHelmet () {
    return (
      <Helmet>
        <title>{`React SSR - ${auth ? 'login' : 'logout'}`}</title>
        <meta property="og:title" content="React SSR" />
      </Helmet>
    )
  }

  return (
    <div style={vhcenter}>
      {renderHelmet()}
      <h3>Welcome</h3>
      <p>check out these awesome features</p>
    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ auth });

export default {
  component: connect(mapStateToProps)(Home)
};
