import React, {Component} from 'react';
import './Strokes.scss';
import {FaCircle} from 'react-icons/fa';
import {Popover} from 'antd';

export default class Strokes extends Component {
  constructor(props) {
    super(props);
    this.strokeSet = [3, 5, 8, 10, 15, 20, 25];
  }

  getStrokes = (strokes) => {
    const {size} = this.props;
    return (
      <div className="strokes">
        {strokes.map((stroke) => (
          <div
            className={`stroke ${size === `${stroke}px` ? 'active' : ''}`}
            key={stroke}
            style={{fontSize: `${stroke}px`}}
            onClick={() => this.setSize(stroke)}
          >
            <FaCircle />
          </div>
        ))}
      </div>
    );
  };

  setSize = (stroke) => {
    const {updateStrokeSize} = this.props;
    updateStrokeSize(stroke);
  };

  render() {
    const {size} = this.props;
    return (
      <Popover content={this.getStrokes(this.strokeSet)} placement="right" trigger="click">
        <div className="stroke-set" style={{fontSize: `${size}px`}}>
          <FaCircle />
        </div>
      </Popover>
    );
  }
}
