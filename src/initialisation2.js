import React, { useState,useEffect} from "react";
import Matrice from "./matrice/matrice";
import MatriceRes from "./matriceRes/matrice";
export default function Initialisation2(props) {
  let [matrice1,setMatrice1] = useState([]);
  let [matrice2,setMatrice2] = useState([]);
  let iterateur1= matrice1.values();
  let iterateur2= matrice2.values();
  
  function init(){
  if (iterateur1.next().value===undefined && iterateur2.next().value===undefined) {
    for (let i = 0; i < props.ligne; i++) {
   matrice1=[...matrice1,[]];
      for (let j = 0; j < props.colonne; j++) {
      matrice1=matrice1.map((item,index)=> index===i ?[...item,1]:item)
      }
    }
      for (let i = 0; i < props.colonne; i++) {
        matrice2=[...matrice2,[]];
           for (let j = 0; j < props.colonne2; j++) {
           matrice2=matrice2.map((item,index)=> index===i ?[...item,1]:item)
           }
    }
  }
}

init();
  function changeMatrice1(matrice){

   setMatrice1(matrice);
   setMatrice2(matrice2);
  }
  function changeMatrice2(matrice){
  setMatrice1(matrice1);
  setMatrice2(matrice);
  }

  return (
    <div className="row">
      <Matrice
        ligne={props.ligne}
        colonne={props.colonne}
        matrice={matrice1}
        setMatrice={changeMatrice1}
      />
      <Matrice
        ligne={props.colonne}
        colonne={props.colonne2}
        matrice={matrice2}
        setMatrice={changeMatrice2}
      />
      <MatriceRes
        ligne={props.ligne}
        colonne={props.colonne}
        matrice1={matrice1}
        matrice2={matrice2}
        colonne2={props.colonne2}
      />
    </div>
  );
}
