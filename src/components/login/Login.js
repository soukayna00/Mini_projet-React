// SignUp.js
import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import PasswordStrengthBar from "./PasswordStrengthBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleGoBack = () => {
    window.history.goBack();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="split-layout">
      <div className="picture-container"></div>
      <div className="form-container">
        <div>
          <button className="back-button" onClick={handleGoBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            &emsp;Back
          </button>
        </div>
        <div className="background-image">
          <div className="custom-bg">
            <div className="p-4 custom-card"></div>
            <p className="text-center mb-5 custom-subheading text-light">Log in</p>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-2 mx-5 w-75 text-light">
                Email
                <input
                  type="email"
                  id="custom-input-email"
                  className="form-control equal-width text-light "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 mx-5 w-75 text-light">
                Password
                <div className="blota">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="custom-input border-0 equal-width text-light"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn password-toggle-btn"
                    onClick={togglePasswordVisibility}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              {password && <PasswordStrengthBar password={password} />}
              <div className="text-center w-75">
                <button
                  type="submit"
                  className="btn btn-danger w-50 custom-button"
                >
                  Get Started
                </button>
              </div>
            </form>
            <div className="text-center mt-1 ">
              <p className="text-light">Or sign up with:</p>
              <button className="btn btn-light mr-2" id="google-btn">
                <FontAwesomeIcon icon={faGoogle} className="mr-2" /> Google
              </button>
              <Link to="/" id="signinl">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
