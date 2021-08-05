import React from "react";
import { Link } from "react-router-dom";
import UserImage from "images/userImage.png";
import "styles/organisms/header.css";

const AllocateVacancyHeader: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left-content">
        <div className="header-button">
          <Link to="alocar-vaga">Alocar vaga</Link>
        </div>

        <div className="header-button">
          <Link to="registrar-placa">Registrar placa</Link>
        </div>
      </div>
      <div className="header-right-content">
        <img className="perfil-image" src={UserImage} alt="userImage" />
        <div className="perfil-username">UserName</div>
        <Link to="/login">
          <div className="logout">logout</div>
        </Link>
      </div>
    </div>
  );
};

export default AllocateVacancyHeader;
