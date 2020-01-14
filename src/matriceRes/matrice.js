import React, { useState} from "react";
import HeaderMatrice from "../matrice/headerMatrice";
import BodyMatrice from "./bodyMatrice";
export default function Matrice(props) {
  /** init matriceRes to an empty array */
  let [matriceRes] = useState([]);
  /** it will make the matrix product */
  for (let i = 0; i < props.ligne; i++) {
    /**equals to matriceRes.push([]) i times */
    matriceRes = [...matriceRes, []];
    for (let k = 0; k < props.colonne2; k++) {
      /**  equals to matriceRes[i].push(0) k*i times */
      matriceRes = matriceRes.map((item, index) =>
        index === i ? [...item, 0] : item
      );
      for (let j = 0; j < props.colonne; j++) {
        /** it will calculate every items for MatriceRes */
        matriceRes[i][k] += props.matrice1[i][j] * props.matrice2[j][k];
      }
    }
  }
  return (
    <div className="col mx-2 table-responsive ">
      <table className="table">
        {/** show the header of the matriceRes */}
        <thead>
          <HeaderMatrice matrice={matriceRes} />
        </thead>
        {/** show the body of the matriceRes */}
        <tbody>
          <BodyMatrice matrice={matriceRes} />
        </tbody>
      </table>
    </div>
  );
}
