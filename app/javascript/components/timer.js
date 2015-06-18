import React, { Component } from 'react';

import Event from './event'

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }

  renderEvents() {
    return this.props.timer.events.map((event) => {
      return <Event event={event} key={event.id}/>;
    });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.timer.title}</div>
        <ul className="list-group">
          {this.renderEvents()}
        </ul>
      </div>
    );
  }
}
