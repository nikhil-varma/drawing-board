import React, {PureComponent} from 'react';
import {Popover} from 'antd';
import {FaHighlighter, FaPen} from 'react-icons/fa';
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

class Pen extends PureComponent {
  render() {
    const {renderOptions, selectedTool, id, setTool} = this.props;
    return (
      <Popover content={renderOptions(this.props)} placement="right" trigger="click">
        <div
          id={id}
          className={`tool ${selectedTool === id ? 'active' : ''}`}
          onClick={() => setTool(id, {color: 'black'})}
        >
          <FaPen />
        </div>
      </Popover>
    );
  }
}

export const Highlighter = (props) => {
  const {selectedTool, id, setTool} = props;

  return (
    <div
      id={id}
      className={`tool ${selectedTool === id ? 'active' : ''}`}
      onClick={() => setTool(id, {color: 'rgb(226,205,30, 0.7%)', width: 15})}
    >
      <FaHighlighter />
    </div>
  );
};
export {Pen as Marker};
export {Highlighter as Selector};
