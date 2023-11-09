import React, { Component } from 'react';

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        <span>{message}</span>
      </div>
    );
  }
}
