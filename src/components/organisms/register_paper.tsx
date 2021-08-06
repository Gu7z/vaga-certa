import React from "react";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";
import "styles/organisms/register_paper.css";

const RegisterPaper: React.FC = () => {
  return (
    <div className="register-paper">
      <form>
        <div className="register-cpf">
          <label htmlFor="">CPF</label>
          <InputMask mask="999.999.999-99" placeholder="___.___.___-__" />
        </div>
        <div className="register-password">
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="********" />
        </div>
        <div className="register-buttons">
          <Link to="/alocar-vaga">
            <div className="btn btn-blue">Registrar</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterPaper;
