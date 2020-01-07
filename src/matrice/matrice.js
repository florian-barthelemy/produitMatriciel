import React, { useState } from "react";
import HeaderMatrice from "./headerMatrice";
import BodyMatrice from "./bodyMatrice";
export default function Matrice(props) {
  let [matrice] = useState([]);

  for (let i = 0; i < props.ligne;i++) {
    matrice[i] = [];
    for (let j = 0; j < props.colonne;j++) {
      matrice[i].push(1);
    }
  }
  props.setMatrice(matrice);

  function setCellule(indice, value) {
    matrice[indice[0]][indice[1]]=parseFloat(value);
    props.setMatrice(matrice);
    props.calculer();
  }
  return (
    <div className="col mx-2 table-responsive ">
      <table className="table">
        <thead><HeaderMatrice matrice={matrice}/></thead>
        <tbody>
            <BodyMatrice disabled={false} matrice={matrice} setCellule={setCellule}/>
        </tbody>
      </table>
    </div>
  );
}
