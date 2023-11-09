import React, { Component } from 'react';
import css from './Section.module.css';
export class Section extends Component {
  render() {
    const { title } = this.props;

    return (
      <section className={css.section}>
        <h2 className={css.header}>{title}</h2>
        {this.props.children}
      </section>
    );
  }
}
