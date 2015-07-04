import React, { Component } from 'react';

export default class HeaderTimer extends Component {
  render() {
    return (
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="TestPack subject"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Start</button>
          </span>
        </div>
      </form>
    );
  }
}
