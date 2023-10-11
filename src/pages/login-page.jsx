import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import containerStyle, { overlayStyle } from '../helper-functions';


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
      const response = await axios.post('http://localhost:3000/user/login', {
        username: userName,
        password: password,
      });

      const authenticatedUserId = response.data.user.id;
      console.log(response.data)
      setUserId(authenticatedUserId);
      navigate('/home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  return (
    <div style={containerStyle}>
      <div className='container' >
        <div className=" row justify-content-center" >
        <div className='col-sm-9 row justify-content-center' style={overlayStyle}>
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
        
      </div>
    </div>
    
  );
}

export default Login;
