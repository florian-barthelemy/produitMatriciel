import React from "react";
import HeaderMatrice from "./headerMatrice";
import BodyMatrice from "./bodyMatrice";
export default function Matrice(props) {
let matrice=props.matrice;
/***
 * function called by the changement of one of the cellule of the matrix
 */
  function setCellule(indice, value) {
    /**
     * 
     * equals to matrice[indice[0]][indice[1]]=parseFloat(value)
     * because value== input number value and indice contains the two index of the value changed
     */
    matrice=matrice.map((item,index1)=>index1!==parseFloat(indice[0]) ? item:
    item.map((item2,index2)=> index2===parseFloat(indice[1]) ? parseFloat(value) :item2 ) )
    props.setMatrice(matrice)
  }
  return (
    <div className=" mx-2 table-responsive ">
      <table className="table table-bordered">
       {/**
        * it calls the header of the tab
        */}
        <thead><HeaderMatrice matrice={matrice}/></thead>
        {/** it calls the body of the tab */}
        <tbody>
            <BodyMatrice  matrice={matrice} setCellule={setCellule}/>
        </tbody>
      </table>
    </div>
  );
}
