import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

function Widget(props) {
  this.start = start;

  function start() {
    const root = document.querySelector(props.placeholder);
    
    const modalAndButton = document.createElement('div');
    root.append(modalAndButton);

    ReactDOM.render(<App {...props} />, modalAndButton);
  }
}

const createWidget = (config) => new Widget(config);

window.Widget = createWidget;