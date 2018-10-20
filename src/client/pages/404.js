import React from 'react';
import { vhcenter } from '@/stylesheets/utils';

const NotFoundPage = () => {
  return (
    <div style={vhcenter}>
      <h1>Ooops, route not found.</h1>
    </div>
  )
}

export default {
  component: NotFoundPage
}
