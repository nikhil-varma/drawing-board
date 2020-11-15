import React, {PureComponent} from 'react';
import './Options.scss';

export default class Options extends PureComponent {
  render() {
    const {options} = this.props;
    return (
      <div className="option-list">
        {options.map((Option) => (
          <div className="option" key={`Option-${Option}`}>
            {Option}
          </div>
        ))}
      </div>
    );
  }
}
