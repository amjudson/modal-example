import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css'

class SimpleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-title">People Tracker</li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <i className="fas fa-home nav-icon"></i>
                <span className="navSpan">Home</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/person'>
                <i className="fas fa-user nav-icon"></i>
                <span className="nav-span">Person</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/datepicker'>
                <i className="far fa-calendar-alt nav-icon"></i>
                <span className="nav-span">Date Picker</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/trigger'>
                <i className="far fa-smile nav-icon"></i>
                <span className="nav-span">Test Trigger Set</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                <i className="far fa-lightbulb nav-icon"></i>
                <span className="nav-span">About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  };
}

export default SimpleNavigation;
