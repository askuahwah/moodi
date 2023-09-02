import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
