import React, {Component} from 'react';
import {FaPen, FaHighlighter} from 'react-icons/fa';
import Tools from './components/tools/Tools';
import Whiteboard from './components/whiteboard/Whiteboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.whiteboardConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
      lineCap: 'round',
      lineJoin: 'round',
      strokeStyle: 'red',
      lineWidth: 10,
    };
    this.toolSet = [
      {
        name: 'Pen',
        icon: <FaPen />,
        id: 'pen',
        options: {
          colors: ['red', 'blue', 'green'],
          strokes: ['1px', '5px', '3px'],
        },
      },
      {
        name: 'Highligher',
        icon: <FaHighlighter />,
        id: 'highligher',
        options: {
          colors: [],
          strokes: [],
        },
      },
    ];
  }

  handleToolSelection = ({selectedTool}) => {
    console.log(selectedTool);
  };

  render() {
    return (
      <>
        <Tools tools={this.toolSet} handleToolSelection={this.handleToolSelection} />
        <Whiteboard {...this.whiteboardConfig} />
      </>
    );
  }
}

export default App;
