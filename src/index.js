import React from 'react';
import ReactDOM from 'react-dom';
import { WidgetComponent } from './WidgetComponent';

// attributes: ['red', 'blue', 'black'],
// placeholder: '.product-color',
// placeholder_text: 'Surprise me with the color',
// cart_button: '.cart-btn',
// image: window.location.origin + '/images/black.png',
// select_attribute: function(attr) {}


// делается в самом конце
// When that placeholder button is clicked, a widget/model/iframe should open containing your React app

// The react app should contain at least two STEPS/pages/screens, implementation is your choice

// First screen should visualise the image of the product and a button 'Surprise me'

// When that button is clicked, a loading indicator should show up, with a 'randomising your choice' gif, animation or something alike

// After a couple of seconds, the last screen should show up, showing the randomly selected attribute and a button 'Select me'

// When that button is clicked, you should select that attribute on the product page and close your widget/model/iframe

const root = document.getElementById('root');

const props = {
  attributes: ['red', 'blue', 'black'], //
  placeholder: '.product-color', //
  placeholder_text: 'Surprise me with the color', //
  cart_button: '.cart-btn',
  image: window.location.origin + '/images/black.png', //
  select_attribute: function(attr) {}
};

ReactDOM.render(<WidgetComponent {...props} />, root);
