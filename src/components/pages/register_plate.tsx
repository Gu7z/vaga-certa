import React, { useState } from "react";
import Header from "components/organisms/header";
import "styles/pages/register_plate.css";
import InputMask from "react-input-mask";

const RegisterPlate: React.FC = () => {
  const [myPlates, setMyPlates] = useState<string[]>([]);
  const [newPlate, setNewPlate] = useState("");

  const handleNewPlate = () => {
    const newPlates = [...myPlates, newPlate];
    if (!newPlate || newPlate.length < 6) return;

    setMyPlates(newPlates);
  };

  const parseMaskChar = (str: string) =>
    str.replaceAll("-", "").replaceAll("_", "").toUpperCase();

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedString = parseMaskChar(event.target.value);

    setNewPlate(parsedString);
  };

  return (
    <div className="register_plate">
      <Header />
      <div className="add-plate">
        <h1>Adicionar Placa</h1>
        <InputMask
          mask="aaa-9999"
          placeholder="ABC-1234"
          value={newPlate}
          onChange={handleOnchange}
        />
        <button className="btn btn-blue" onClick={handleNewPlate}>
          Adicionar
        </button>
      </div>
      <div className="my-plates">
        <h1>Minhas Placas</h1>
        <ul>
          {myPlates.map((eachPlate, index) => (
            <li key={`my-plate-${index}`}>{eachPlate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterPlate;
