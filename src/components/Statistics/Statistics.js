import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <span>Good: {good}</span>
        <br />
        <span>Neutral: {neutral}</span>
        <br />
        <span>Bad: {bad}</span>
        <br />
        <span>Total: {total}</span>
        <br />
        <span>
          Positive feedback:{' '}
          {isNaN(positivePercentage) ? 0 : positivePercentage}%
        </span>
      </div>
    );
  }
}
