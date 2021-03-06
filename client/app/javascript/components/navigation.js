import React, { Component } from 'react';

import HeaderTimer from '../containers/HeaderTimer';
import HeaderEvent from '../containers/HeaderEvent';

export default class Navigation extends Component {
  render() {
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
            <a className="navbar-brand" href="#">TimeLoop</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <HeaderTimer/>
              <HeaderEvent/>
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
