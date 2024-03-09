import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <NavLink className="navbar-brand" to="/" style={{ color: '#be50f4', margin: 'auto', fontWeight: '700', letterSpacing: '1px', fontSize: '28px' }}>SmartTutor</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" activeClassName="active-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/preregistration" activeClassName="active-link">PreRegistration</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courseclash" activeClassName="active-link">CourseClash</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/courses" activeClassName="active-link">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/announcement" activeClassName="active-link">Announcement</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" activeClassName="active-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup" activeClassName="active-link">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
