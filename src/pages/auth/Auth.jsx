import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <>
      <div className="Auth">
        <div className="a-left">
          <img src={Logo} alt="" />
          <div className="Webname">
            <h1>Connecto Media</h1>
            <h6>Let's connect with the World</h6>
          </div>
        </div>
        {/* <SignUp /> */}
        <LogIn />
      </div>
    </>
  );
};

const LogIn = () => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>Don't have an account? Sign Up</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account? Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Auth;
