import React, { Component } from 'react';

export default class Event extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.event.timestamp.toString()} {this.props.event.title}
      </li>
    );
  }
}
