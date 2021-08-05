import React from "react";
import { Link } from "react-router-dom";
import UserImage from "images/userImage.png";
import "styles/organisms/header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-left-content">
        <Link className="header-button" to="alocar-vaga">
          <div>Alocar vaga</div>
        </Link>

        <Link className="header-button" to="registrar-placa">
          <div>Registrar placa</div>
        </Link>
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

export default Header;
