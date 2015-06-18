import React, { Component } from 'react';

export default class Navigation extends Component {
  renderTimer() {
    return (
      <form className="navbar-form navbar-left">
        <div className="input-group">
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Type <span className="caret"></span></button>
            <ul className="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </span>
          <input type="text" className="form-control" placeholder="TestPack subject"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">Start</button>
          </span>
        </div>
      </form>
    );
  }

  render() {
    // let timer = this.renderTimer();
    let timer = '';
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">TestPack</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {timer}
              <li className="dropdown">
                <a href="#" className="dropdown-toggle">
                  Gertjan Reynaert <span className="caret"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
