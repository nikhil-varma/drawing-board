import React from 'react';
import {Popover} from 'antd';
import {FaEraser, FaHighlighter, FaPen} from 'react-icons/fa';
import './BaseToolHolder.scss';

/*
class BaseToolHolder extends PureComponent {
  render() {
    const {id, selectedTool, icon, setTool} = this.props;
    return (
      <div
        id={id}
        key={id}
        className={`tool ${selectedTool === id ? 'active' : ''}`}
        onClick={() => setTool(id)}
      >
        {icon}
      </div>
    );
  }
}

const withOptions = (WrappedComponent) => (props) => {
  const {renderOptions} = props;
  return (
    <Popover body={renderOptions(props)} preferPlace="right" trigger="click">
      <WrappedComponent {...props} />
    </Popover>
  );
};

const Pen = withOptions((props) => <BaseToolHolder icon={<FaPen />} id="pen" {...props} />);
export const Highlighter = (props) => {
  return <BaseToolHolder icon={<FaHighlighter />} id="highlighter" {...props} />;
};
*/

const Pen = (props) => {
  const {renderOptions, selectedTool, id, setTool, color} = props;
  return (
    <Popover content={renderOptions(props)} placement="right" trigger="click">
      <div
        id={id}
        className={`tool ${selectedTool === id ? 'active' : ''}`}
        onClick={() => setTool(id, {color: color || 'black'})}
      >
        <FaPen />
      </div>
    </Popover>
  );
};

export const Highlighter = (props) => {
  const {renderOptions, selectedTool, id, setTool} = props;

  return renderOptions ? (
    <Popover content={renderOptions(props)} placement="right" trigger="click">
      <div
        id={id}
        className={`tool ${selectedTool === id ? 'active' : ''}`}
        onClick={() => setTool(id, {color: 'rgb(226,205,30, 0.7%)', width: 15})}
      >
        <FaHighlighter />
      </div>
    </Popover>
  ) : (
    <div
      id={id}
      className={`tool ${selectedTool === id ? 'active' : ''}`}
      onClick={() => setTool(id, {color: 'rgb(226,205,30, 0.7%)', width: 15})}
    >
      <FaHighlighter />
    </div>
  );
};

export const WhiteMarker = (props) => {
  const {selectedTool, id, setTool} = props;

  return (
    <div
      id={id}
      className={`tool ${selectedTool === id ? 'active' : ''}`}
      onClick={() => setTool(id, {color: 'white', width: 15})}
    >
      <FaEraser />
    </div>
  );
};
export {Pen as Marker};
export {Highlighter as Selector};
export {WhiteMarker as Erasor};
