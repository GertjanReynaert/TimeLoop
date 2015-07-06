import React, { Component } from 'react';

import { USER_EVENT } from '../constants/EventTypes'

export default class HeaderEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEvent: ''
    };
  }

  handleChange(e) {
    this.setState({ newEvent: e.target.value });
  }

  handleSubmit() {
    this.props.addEvent(
      this.props.runningTimer.id,
      USER_EVENT,
      this.state.newEvent
    );

    this.setState({newEvent: '' });
  }

  render() {
    return (
      <form className="navbar-form navbar-left">
        {this.renderFormContent()}
      </form>
    );
  }

  renderFormContent() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="TestPack event subject" value={this.state.newEvent} onChange={this.handleChange.bind(this)}/>
        <span className="input-group-btn">
          <button type="button" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Add</button>
        </span>
      </div>
    );
  }
}
