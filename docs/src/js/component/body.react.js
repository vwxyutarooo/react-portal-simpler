'use strict'

import React from 'react';

import Portal from 'portal.react';


export default class Body extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>React Portal Simpler</h1>
        <Portal>
          <div>
            <p>Child elements such as Overlay or Modal or Whatever you want.</p>
          </div>
        </Portal>
      </div>
    );
  }


}
