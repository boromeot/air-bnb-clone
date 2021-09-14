import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('gg');
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <div className='modal-container'>
      <div className='header flex-center'>
        <h1>Log in</h1>
      </div>
      <div className='form-container'>
        <div className='welcome'>
          <h3 className='welcome-text'>Welcome to Carebnb</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className='form-label'>
            <div className='label-text'>Username / Email</div>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required />
          </label>
          <label className='form-label'>
            <div className='label-text'>
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
          </label>
          <button className='login-btn' type="submit">
            <div className='btn-text'>Continue</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
