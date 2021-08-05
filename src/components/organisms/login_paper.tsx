import React from "react";
import "styles/organisms/login_paper.css";
import InputMask from "react-input-mask";

const LoginPaper: React.FC = () => {
  return (
    <div className="paper">
      <form>
        <div className="login-cpf">
          <label htmlFor="">CPF</label>
          <InputMask mask="999.999.999-99" placeholder="___.___.___-__" />
        </div>
        <div className="login-password">
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="********" />
        </div>
        <div>
          <div className="btn btn-blue">Login</div>
        </div>
      </form>
    </div>
  );
};

export default LoginPaper;
