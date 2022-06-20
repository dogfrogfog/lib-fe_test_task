import React from 'react';
import ReactDOM from 'react-dom';
import { WidgetComponent } from './WidgetComponent';

// attributes: ['red', 'blue', 'black'],
// placeholder: '.product-color',
// placeholder_text: 'Surprise me with the color',
// cart_button: '.cart-btn',
// image: window.location.origin + '/images/black.png',
// select_attribute: function(attr) {}

function Widget(props) {
  this.start = start;

  function start() {
    const root = document.querySelector(props.placeholder);

    ReactDOM.render(<WidgetComponent />, root);
  }
}

const createWidget = (config) => new Widget(config);

window.Widget = createWidget;
