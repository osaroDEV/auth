import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// import styled from 'styled-components';

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  
  
  return (
    <section className="form-container">
      <div class="form-control">
        <div class="main-heading">
          {hasAccount ? (
            <h1>
              Log in to <span class="underline">Portal</span>
            </h1>
          ) : (
            <h1>
              Sign up to <span class="underline">Portal</span>
            </h1>
          )}
        </div>
        <div className="input-container">
          <input
            className="email"
            type="text"
            required
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon">
            <MdEmail />
          </span>
          <p className="message-email">{emailError}</p>
        </div>

        <div className="input-container">
          <input
            className="password"
            type="password"
            required
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon">
            <RiLockPasswordFill />
          </span>
          <p className="message-password">{passwordError}</p>
        </div>

        <div>
          {hasAccount ? (
            <>
              <button className="login" onClick={handleLogin}>
                Sign In
              </button>
              <p className="text-align-center">
                Don't have an account?{" "}
                <span
                  className="alter"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  <span>&#x1F449;</span>Sign Up
                </span>
              </p>
            </>
          ) : (
            <>
              <button className="login" onClick={handleSignup}>
                Sign Up
              </button>
              <p className="text-align-center">
                Have an account?{" "}
                <span
                  className="alter"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  <span>&#x1F449;</span>Sign In
                </span>
              </p>
            </>
            )}
        </div>
      </div>
    </section>
  );
};

export default Login;
