import React, {Component} from 'react';
import Whiteboard from './components/whiteboard/Whiteboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.whiteboardConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
      lineCap: 'round',
      lineJoin: 'round',
      strokeStyle: 'black',
      lineWidth: 10,
    };
  }

  render() {
    return (
      <>
        <Whiteboard {...this.whiteboardConfig} />
      </>
    );
  }
}

export default App;
