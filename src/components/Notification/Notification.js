import React, { Component } from 'react';
import css from './Notification.module.css';
export class Notification extends Component {
  render() {
    const { message } = this.props;

    return (
      <div>
        <span className={css.message}>{message}</span>
      </div>
    );
  }
}
