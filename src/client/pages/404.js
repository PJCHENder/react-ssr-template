import React from 'react';
import { Helmet } from 'react-helmet';
import { vhcenter } from '@/stylesheets/utils';


// staticContext 是從 renderer.js 中透過 context 參數傳入，
// static Router 將 context 這個 props 改名為 staticContext
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  function renderHelmet() {
    return (
      <Helmet>
        <title>404 Not Found</title>
        <meta property="og:title" content="404 Not Found" />
      </Helmet>
    )
  }

  return (
    <div style={vhcenter}>
      {renderHelmet()}
      <h1>Ooops, route not found.</h1>
    </div>
  )
}

export default {
  component: NotFoundPage
}
