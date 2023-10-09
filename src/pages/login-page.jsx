import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom'; // Import the hook


function Login({ setUserId, userId }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const inputUserName = (event) => {
    setUserName(event.target.value);
  }

  const inputPassword = (event) => {
    setPassword(event.target.value);
  }

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request to the login endpoint with username and password
      const response = await axios.post('http://localhost:3000/user/login', {
        username: userName,
        password: password,
      });

      // Assuming the response contains a user ID upon successful login
      const authenticatedUserId = response.data.user.id; // Replace with the actual key in your response data
      console.log(response.data)
      // Set the userId and redirect to /home
      setUserId(authenticatedUserId);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, display an error message, etc.
    }
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-4'>
          <form>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" onChange={inputUserName} value={userName} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" onChange={inputPassword} value={password} className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label">keep me logged in</label>
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
