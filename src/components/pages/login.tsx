import React from "react";
import "styles/pages/login.css";
import LoginPaper from "components/organisms/login_paper";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login-bg"></div>
      <div className="login-content">
        <LoginPaper />
      </div>
    </div>
  );
};

export default Login;
