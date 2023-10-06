import React, { useState } from 'react';

function Login() {
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
console.log("from login")
}

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-4'>
          <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="email" onChange={inputUserName} value={userName} className="form-control" aria-describedby="emailHelp"/>
                <div  className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" onChange={inputPassword} value={password} className="form-control" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
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