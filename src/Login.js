import React from "react";

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
        <img class="logo" src="./tab-logo.png" alt="logo" />
        <div class="main-heading">
          <h2>Lorem App</h2>
        </div>
        <input
          className="user"
          type="text"
          autoFocus
          required
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{emailError}</p>
        <input
          className="user"
          type="password"
          required
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
        <div>
          {hasAccount ? (
            <>
              <button className="next" onClick={handleLogin}>
                Sign In
              </button>
              <p className="text-align-center">
                Don't have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button className="create" onClick={handleSignup}>
                Sign Up
              </button>
              <p className="text-align-center">
                Have an account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
