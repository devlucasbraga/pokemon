import React, { useEffect } from "react";
import { ListaTypo } from "./styled";

const habilidadesArray = ["Fogo", "Planta", "Elétrico", "Água", "Normal"];

const DropDownTipo = () => {

  const [habilidades, setHabilidades] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setHabilidades([...habilidades, target.value]);
    } else {
      setHabilidades(habilidades.filter((tipo) => tipo !== value));
    }
  }

  function handleChecked(tipo) {
    return habilidades.includes(tipo);
  }

  return (
    <div>
      <ListaTypo>
        {habilidadesArray.map((tipo) => (
          <label key={tipo}>
            <input
              type="checkbox"
              value={tipo}
              checked={handleChecked(tipo)}
              onChange={handleChange}
            />
            {tipo}
          </label>
        ))}
      </ListaTypo>
    </div>
  );
};

export default DropDownTipo;
