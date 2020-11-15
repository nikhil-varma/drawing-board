import React, {Component} from 'react';
import './Colors.scss';
import {FaSquareFull} from 'react-icons/fa';
import {Popover} from 'antd';

export default class Colors extends Component {
  constructor(props) {
    super(props);
    this.colorSet = ['red', 'green', 'blue', 'aqua', 'black'];
  }

  getColors = (colors) => {
    return (
      <div className="colors">
        {colors.map((c) => (
          <div className="color" key={c} style={{color: c}} onClick={() => this.setColor(c)}>
            <FaSquareFull />
          </div>
        ))}
      </div>
    );
  };

  setColor = (stroke) => {
    const {updateStrokeColor} = this.props;
    updateStrokeColor(stroke);
  };

  render() {
    const {color} = this.props;
    return (
      <Popover content={this.getColors(this.colorSet)} placement="right" trigger="click">
        <div className="color-set" style={{color}}>
          <FaSquareFull />
        </div>
      </Popover>
    );
  }
}
