import React from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

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
            <h1>Login to osaroDEV</h1>
          ) : (
            <h1>Sign up to osaroDEV</h1>
          )}
        </div>
        <label htmlFor="name">Name</label>
        <div className="input-container">
          <input
            className="user"
            type="text"
            required
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="icon">
            <MdEmail />
          </span>
        </div>

        <p>{emailError}</p>
        <label htmlFor="password">Password</label>
        <div className="input-container">
          <input
            className="user"
            type="password"
            required
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="icon">
            <RiLockPasswordFill />
          </span>
        </div>
        <p>{passwordError}</p>
        <div>
          {hasAccount ? (
            <>
              <button className="next" onClick={handleLogin}>
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
              <button className="create" onClick={handleSignup}>
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
