import React from 'react';
import { vhcenter } from '@/stylesheets/utils';


// staticContext 是從 renderer.js 中透過 context 參數傳入，
// static Router 將 context 這個 props 改名為 staticContext
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div style={vhcenter}>
      <h1>Ooops, route not found.</h1>
    </div>
  )
}

export default {
  component: NotFoundPage
}
