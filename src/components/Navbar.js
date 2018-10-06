import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="nav nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">React Router Sandbox</Link>
          <ul className="right">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
