import React, {Component} from 'react';
import './Tools.scss';
import 'antd/dist/antd.css';
import {Erasor, Marker, Selector} from '../BaseToolHolder/BaseToolHolder';
import Strokes from '../strokes/Strokes';
import Colors from '../colors/Colors';

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: 'pen',
      size: 10,
      color: 'black',
    };
  }

  setTool = (selectedTool, config) => {
    const {setStrokeStyle} = this.props;
    const {width, color} = config;
    setStrokeStyle && setStrokeStyle(config);
    this.setState({size: width, selectedTool, color});
  };

  updateStrokeSize = (size) => {
    const {setStrokeSize} = this.props;
    this.setState({size});
    setStrokeSize && setStrokeSize({width: size});
  };

  updateStrokeColor = (color) => {
    const {setStrokeColor} = this.props;
    this.setState({color});
    setStrokeColor && setStrokeColor({color});
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
    const {selectedTool, size, setStrokeStyle, color} = this.state;
    return (
      <div className="toolbar">
        <Marker
          id="pen"
          selectedTool={selectedTool}
          setTool={this.setTool}
          setStrokeStyle={setStrokeStyle}
          size={size}
          color={color}
          renderOptions={(props) => {
            return (
              <div className="options-list">
                <div className="option">
                  <Strokes
                    {...props}
                    updateStrokeSize={this.updateStrokeSize}
                    size={size}
                    color={color}
                  />
                </div>
                <div className="option">
                  <Colors {...props} updateStrokeColor={this.updateStrokeColor} color={color} />
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
        <Erasor
          id="erasor"
          selectedTool={selectedTool}
          setTool={this.setTool}
          setStrokeStyle={setStrokeStyle}
        />
      </div>
    );
  }
}
