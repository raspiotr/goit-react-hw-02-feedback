import React, { Component } from 'react';
import css from './Statistics.module.css';
export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <span className={css.item}>Good: {good}</span>
        <span className={css.item}>Neutral: {neutral}</span>
        <span className={css.item}>Bad: {bad}</span>
        <span className={css.item}>Total: {total}</span>
        <span className={css.item}>
          Positive feedback:{' '}
          {isNaN(positivePercentage) ? 0 : positivePercentage}%
        </span>
      </div>
    );
  }
}
