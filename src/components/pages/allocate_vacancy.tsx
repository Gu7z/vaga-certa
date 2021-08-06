import React, { useState } from "react";
import Header from "components/organisms/header";
import "styles/pages/allocate_vacancy.css";

const AllocateVacancy: React.FC = () => {
  const [vacancyNumber, setVacancyNumber] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const handleVerifyVacancy = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();

    setHasChecked(true);
    if (vacancyNumber.length > 2) setIsAvailable(true);
    else setIsAvailable(false);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasChecked(false);
    setVacancyNumber(event.target.value);
  };

  return (
    <div className="allocate_vacancy">
      <Header />
      <form className="check-vacancy" onSubmit={handleVerifyVacancy}>
        <label htmlFor="">Verificar vaga</label>
        <input type="number" onChange={handleOnChange} />
        <div className="btn" onClick={handleVerifyVacancy}>
          Verificar
        </div>
        {hasChecked && (
          <div>
            <p>
              Vaga {vacancyNumber}:{" "}
              <b>{isAvailable ? "Sendo usada" : "Disponivel"}</b>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AllocateVacancy;
