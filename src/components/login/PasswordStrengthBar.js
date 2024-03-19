// PasswordStrengthBar.js
import React from "react";

const PasswordStrengthBar = ({ password }) => {
  const calculateStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) {
      strength += 20;
    }

    if (password.length <= 12) {
      strength += 20;
    }

    if (/\d/.test(password)) {
      strength += 20;
    }

    if (/[A-Z]/.test(password)) {
      strength += 20;
    }

    return Math.min(strength, 100);
  };

  const getStrengthColor = (strength) => {
    if (strength < 30) {
      return "weak";
    } else if (strength < 70) {
      return "fair";
    } else {
      return "strong";
    }
  };

  const strength = calculateStrength(password);
  const strengthColorClass = getStrengthColor(strength);

  const strengthText = () => {
    if (strength < 30) {
      return "Weak";
    } else if (strength < 70) {
      return "Fair";
    } else {
      return "Strong";
    }
  };

  const explanationText = () => {
    if (strength < 30) {
      return "Password is too weak.Please use a stronger password.";
    } else if (strength < 70) {
      return "Password strength is fair, but consider adding more complexity.";
    } else {
      return "Password is strong. Good job!";
    }
  };

  return (
    <div className={`password-strength-bar ${strengthColorClass} w-75`}>
      {/* <div
        className={`progress-bar`}
        role="progressbar"
        style={{ width: `${strength}%` }}
        aria-valuenow={strength}
        aria-valuemin="0"
        aria-valuemax="100"
      /> */}
      <div className={`strength-text ${strengthColorClass}`}>
        {strengthText()}
      </div>
      <div className={`explanation-text ${strengthColorClass} text-light`}>
        {explanationText()}
      </div>
    </div>
  );
};

export default PasswordStrengthBar;
