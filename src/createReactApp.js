import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

export const createReactApp = (props) => {
  const root = document.querySelector(props.placeholder);
    
  const modal = document.createElement('div');
  root.append(modal);
  
  ReactDOM.render(<App {...props} />, modal);
}