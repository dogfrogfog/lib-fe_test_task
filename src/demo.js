import { createReactApp } from './createReactApp';

function Widget(props) {
  this.start = start;

  function start() {
    createReactApp(props);
  }
}

const createWidget = (config) => new Widget(config);

window.Widget = createWidget;