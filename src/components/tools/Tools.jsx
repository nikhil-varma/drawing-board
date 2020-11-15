import React, {Component} from 'react';
import './Tools.scss';
import 'antd/dist/antd.css';
import {Marker, Selector} from '../BaseToolHolder/BaseToolHolder';
import Strokes from '../strokes/Strokes';

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: '',
      size: 10,
    };
  }

  setTool = (selectedTool, config) => {
    const {setStrokeStyle} = this.props;
    const {width} = config;
    setStrokeStyle && setStrokeStyle(config);
    this.setState({size: width, selectedTool});
  };

  updateStrokeSize = (size) => {
    const {setStrokeSize} = this.props;
    this.setState({size}, setStrokeSize && setStrokeSize({width: size}));
  };

  getOptions = (options) => {
    return (
      <div className="option-list">
        {options.map((option, i) => {
          const key = i * 10;
          return (
            <div className="option" key={`option-${option}-${key}`}>
              {option(this.props)}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const {selectedTool, size, setStrokeStyle} = this.state;
    return (
      <div className="toolbar">
        <Marker
          id="pen"
          selectedTool={selectedTool}
          setTool={this.setTool}
          setStrokeStyle={setStrokeStyle}
          renderOptions={(props) => {
            return (
              <div className="options-list">
                <div className="option">
                  <Strokes updateStrokeSize={this.updateStrokeSize} size={size} {...props} />
                </div>
              </div>
            );
          }}
        />
        <Selector
          id="highlighter"
          selectedTool={selectedTool}
          setTool={this.setTool}
          setStrokeStyle={setStrokeStyle}
        />
      </div>
    );
  }
}
