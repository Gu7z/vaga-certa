import React, { useState } from "react";
import Header from "components/organisms/header";
import "styles/pages/allocate_vacancy.css";

const AllocateVacancy: React.FC = () => {
  const [vacancyNumber, setVacancyNumber] = useState("");
  const [hasChecked, setHasChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [success, setSuccess] = useState(false);

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
    setFinalDate("");
    setInitialDate("");
    setSuccess(false);
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
              <b>{isAvailable ? "Disponivel" : "Sendo usada"}</b>
            </p>

            <div>
              {isAvailable && (
                <div>
                  <h1>Alugar</h1>
                  <div>
                    <h2>De:</h2>{" "}
                    <input
                      type="datetime-local"
                      onChange={() => setInitialDate("date")}
                    />
                  </div>
                  <div>
                    <h2>Ate:</h2>{" "}
                    <input
                      type="datetime-local"
                      onChange={() => setFinalDate("date")}
                    />
                  </div>

                  {initialDate && finalDate && (
                    <div>
                      <h1>Valor: R$ 99,90</h1>
                      <div className="payment">
                        <div className="btn" onClick={() => setSuccess(true)}>
                          Pagar com Créditos
                        </div>
                        <div className="btn" onClick={() => setSuccess(true)}>
                          Pagar com Cartão
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </form>
      {success && (
        <h2 className="success">
          Pagamento realizado com sucesso, pode utilizar a vaga!!
        </h2>
      )}
    </div>
  );
};

export default AllocateVacancy;
