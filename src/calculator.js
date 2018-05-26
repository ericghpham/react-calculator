import React from 'react';
import { connect } from 'react-redux';
import { add, subtract, resolve, number } from './actions';

const numbers = [1,2,3,4,5,6,7,8,9, 0];

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.number);
  }

  render() {
    return <button onClick={this.handleClick}>{this.props.number}</button>
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <header className="calculator--output">
          {this.props.output}
        </header>
        <main className="calculator--numbers">
          {numbers.map(n => <Number key={n} number={n} onClick={this.props.number} />)}
        </main>
        <aside className="calculator--operations">
          <button onClick={this.props.add}>+</button>
          <button onClick={this.props.subtract}>-</button>
          <button onClick={this.props.resolve}>=</button>
        </aside>
      </div>
    );
  }
}

const ConnectedCalculator = connect(
    ({ output }) => ({ output }),
    {
      add, subtract, resolve, number
    }
  )(Calculator);

  export default ConnectedCalculator;