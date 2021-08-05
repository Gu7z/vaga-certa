import React from "react";
import RegisterPaper from "components/organisms/register_paper";
import "styles/pages/register.css";

const Register: React.FC = () => {
  return (
    <div className="register">
      <div className="register-bg"></div>
      <div className="register-content">
        <RegisterPaper />
      </div>
    </div>
  );
};

export default Register;
