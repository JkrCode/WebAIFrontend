import * as React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Home from './pages/landing-page';
import About from './pages/about-page';
import Login from './pages/login-page';
import Register from './pages/register-page'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const App = () => {

  const [userId, setUserId] = useState("")



  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home userId={userId} />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login userId={userId} setUserId={setUserId}/>} />
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
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className='container'>
              <ul className="navbar-nav justify-content-end ">
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
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
