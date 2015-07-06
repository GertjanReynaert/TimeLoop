import React, { Component } from 'react';

export default class HeaderTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTimerText: this.props.runningTimer ? this.props.runningTimer.title : ''
    };
  }

  handleChange(e) {
    this.setState({ newTimerText: e.target.value });
  }

  handleSubmit() {
    this.props.startTimer(this.state.newTimerText);
    this.setState({ newTimerText: '' });
  }

  handleStop() {
    this.props.stopTimer(this.props.runningTimer.id);
    this.setState({ currentTimer: undefined });
  }

  renderForm() {
    return (
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="TestPack subject" value={this.state.newTimerText} onChange={this.handleChange.bind(this)}/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)} >Start</button>
          </span>
        </div>
      </form>
    );
  }

  renderButton() {
    return <button className="btn btn-default" type="button" onClick={this.handleStop.bind(this)} >Stop timer</button>;
  }

  render() {
    if (this.props.runningTimer) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  }
}
