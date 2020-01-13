import React, { useState,useEffect} from "react";
import HeaderMatrice from "../matrice/headerMatrice";
import BodyMatrice from "./bodyMatrice";
export default function Matrice(props) {
  let [matriceRes]=useState([]);
  for (let i=0;i<props.ligne;i++){
    matriceRes[i]=[];
    for (let k=0;k<props.colonne2;k++){
        matriceRes[i].push(0);
        for (let j=0;j<props.colonne;j++){
            matriceRes[i][k]+=props.matrice1[i][j]*props.matrice2[j][k]
          
        }
    }
}
  return (
    <div className="col mx-2 table-responsive ">
      <table className="table">
        <thead><HeaderMatrice matrice={matriceRes}/></thead>
        <tbody>
            <BodyMatrice matrice={matriceRes} />
        </tbody>
      </table>
    </div>
  );}