import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const name = event.target.name;
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100
    );
    return positivePercentage;
  }

  render() {
    return (
      <section>
        <h2>Please leave feedback</h2>
        <button type="button" name="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <br />
        <br />
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <br />
        <span>Neutral: {this.state.neutral}</span>
        <br />
        <span>Bad: {this.state.bad}</span>
        <br />
        <span>Total: {this.countTotalFeedback()}</span>
        <br />
        <span>
          Positive feedback:{' '}
          {isNaN(this.countPositiveFeedbackPercentage())
            ? 0
            : this.countPositiveFeedbackPercentage()}
          %
        </span>
      </section>
    );
  }
}
