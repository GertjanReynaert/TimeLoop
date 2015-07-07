import React, { Component } from 'react';
import Moment from 'Moment';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  renderDate(date) {
    return date.fromNow();
  }

  render() {
    return (
      <li className="list-group-item">
        {this.renderDate(this.props.event.timestamp)} {this.props.event.title}
      </li>
    );
  }
}
