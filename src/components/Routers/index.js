import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <div class="navbar-collapse collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/signin" class="nav-link ">
                  Sign In
                </NavLink>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link ">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link ">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default AppRouter;
