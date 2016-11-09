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
            <p>Child element</p>
          </div>
        </Portal>
      </div>
    );
  }


}
