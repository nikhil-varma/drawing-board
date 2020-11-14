import React, {Component} from 'react';
import './Tools.scss';
import {Popover} from 'antd';
import {FaCircle} from 'react-icons/fa';
import 'antd/dist/antd.css';

export default class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTool: '',
    };
  }

  setTool = (selectedTool) => {
    const {handleToolSelection} = this.props;
    this.setState({selectedTool});
    handleToolSelection({selectedTool});
  };

  getToolTemplate = ({id, icon}) => {
    const {selectedTool} = this.state;
    return (
      <div
        id={id}
        key={id}
        className={`tool ${selectedTool === id ? 'active' : ''}`}
        onClick={() => this.setTool(id)}
      >
        {icon}
      </div>
    );
  };

  getOptions = ({colors, strokes}) => {
    const Colors = this.getColors(colors);
    const Strokes = this.getStrokes(strokes);
    return (
      <div>
        <Colors />
        <Strokes />
      </div>
    );
  };

  getColors = (colors = []) => {
    return (
      <div>
        {colors.map((color) => (
          <div key={color}>{color}</div>
        ))}
      </div>
    );
  };

  getStrokes = () => {
    return (
      <div className="strokes">
        <div className="stroke" style={{fontSize: '1px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '3px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '5px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '8px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '10px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '15px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '20px'}}>
          <FaCircle />
        </div>
        <div className="stroke" style={{fontSize: '25px'}}>
          <FaCircle />
        </div>
      </div>
    );
  };

  render() {
    const {tools} = this.props;
    return (
      <div className="toolbar">
        {tools.map((i) => {
          return (
            <Popover content={this.getStrokes()} placement="right" trigger="click" key={i.id}>
              {this.getToolTemplate(i)}
            </Popover>
          );
        })}
      </div>
    );
  }
}
