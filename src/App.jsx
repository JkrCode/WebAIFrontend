import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Home from './components/pages/landing-page';
import About from './components/pages/about-page';
import Login from './components/pages/login-page';
import Register from './components/pages/register-page'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
