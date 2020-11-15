import React, {Component, createRef} from 'react';
import Tools from '../tools/Tools';

export default class Whiteboard extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef(null);
    this.enableDrawing = false;
  }

  componentDidMount() {
    const {lineCap, lineJoin, strokeStyle, lineWidth} = this.props;
    this.setBoardSize();
    const canvas = this.canvasRef.current;
    this.context = canvas.getContext('2d');
    this.context.scale(2, 2);
    this.context.lineCap = lineCap;
    this.context.lineJoin = lineJoin;
    this.context.strokeStyle = strokeStyle;
    this.context.lineWidth = lineWidth;
    this.canvasRef.current = this.context;
  }

  setBoardSize = () => {
    const {width, height} = this.props;
    const canvas = this.canvasRef.current;
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  };

  handleMouseDown = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent;
    this.canvasRef.current.beginPath();
    this.canvasRef.current.moveTo(offsetX, offsetY);
    this.enableDrawing = true;
  };

  handleMouseMove = ({nativeEvent}) => {
    if (!this.enableDrawing) {
      return;
    }
    const {offsetX, offsetY} = nativeEvent;
    this.canvasRef.current.lineTo(offsetX, offsetY);
    this.canvasRef.current.stroke();
  };

  handleMouseUp = () => {
    this.canvasRef.current.closePath();
    this.enableDrawing = false;
  };

  setStrokeStyle = (config) => {
    const {color, width} = config;
    if (color) this.setStrokeColor(config);
    if (width) this.setStrokeSize(config);
  };

  setStrokeSize = (config) => {
    const {width} = config;
    this.context.lineWidth = width;
    this.canvasRef.current = this.context;
  };

  setStrokeColor = (config) => {
    const {color} = config;
    this.context.strokeStyle = color;
    this.canvasRef.current = this.context;
  };

  render() {
    return (
      <>
        <Tools
          setStrokeStyle={this.setStrokeStyle}
          setStrokeColor={this.setStrokeColor}
          setStrokeSize={this.setStrokeSize}
        />
        <canvas
          ref={this.canvasRef}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        />
      </>
    );
  }
}
