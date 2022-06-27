import React, { useEffect, useRef } from "react";
import { Lista, DropDown } from "./styled";

const habilidadesArray = ["Fogo", "Planta", "Elétrico", "Água", "Normal"];

const DropDownTipo = () => {
  const [habilidades, setHabilidades] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const btnRef = useRef();

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

  useEffect(() => {

    const closeDropdown = (e) => {
      if (e.path[0].tagName !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <DropDown>
      <button onClick={() => setIsOpen((prev) => !prev)}>Tipo</button>
      <Lista className={"dropdown" + (isOpen ? "open" : "closed")}>
        {habilidadesArray.map((tipo) => (
          <li key={tipo}>
            <input
              type="checkbox"
              value={tipo}
              checked={handleChecked(tipo)}
              onChange={handleChange}
            />
            {tipo}
          </li>
        ))}
      </Lista>
    </DropDown>
  );
};

export default DropDownTipo;
