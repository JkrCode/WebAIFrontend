import React, { useState } from 'react';
import containerStyle, { overlayStyle } from '../helper-functions';

function Register() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  }

  const inputPassword = (event) =>{
    setPassword(event.target.value)
  }


function submitForm(event){
event.preventDefault();
//redirect auf /Login
console.log("from Register ")
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
            <button type="submit" onClick={submitForm} className="btn btn-primary">Register</button>
          </form>
          </div>
          
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default Register;