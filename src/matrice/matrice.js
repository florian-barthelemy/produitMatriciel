import React from "react";
import HeaderMatrice from "./headerMatrice";
import BodyMatrice from "./bodyMatrice";
export default function Matrice(props) {
let matrice=props.matrice;

  function setCellule(indice, value) {
    matrice=matrice.map((item,index1)=>index1!==parseFloat(indice[0]) ? item:
    item.map((item2,index2)=> index2===parseFloat(indice[1]) ? parseFloat(value) :item2 ) )
    props.setMatrice(matrice)
  }
  return (
    <div className="col mx-2 table-responsive ">
      <table className="table">
        <thead><HeaderMatrice matrice={matrice}/></thead>
        <tbody>
            <BodyMatrice  matrice={matrice} setCellule={setCellule}/>
        </tbody>
      </table>
    </div>
  );
}
