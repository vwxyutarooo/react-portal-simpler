'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Body from 'component/body.react';


const target = document.getElementById('mount-point');


ReactDOM.render(
  <Body />,
  target
);
