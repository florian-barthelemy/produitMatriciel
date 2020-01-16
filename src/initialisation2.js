import React, { useState } from "react";
import Matrice from "./matrice/matrice";
import MatriceRes from "./matriceRes/matrice";
import Navigation from './navigation';
import BoutonRetour from './boutonRetour';
export default function Initialisation2(props) {
  /** *
   * 
   * init matrice1 ,matrice2 to an empty array
   * iterateur1 and interateur2 takes values of matrice1 and matrice2
   */
  let [navVal,setNavVal]= useState("matrice1");
  let [matrice1, setMatrice1] = useState([]);
  let [matrice2, setMatrice2] = useState([]);
  let iterateur1 = matrice1.values();
  let iterateur2 = matrice2.values(); 

  /**
   * 
   * this function will check if the first value of matrice1 and matrice2 are not undefined
   * if they are so we init the two matrix 
   */
  function init() {
    if (
      iterateur1.next().value === undefined &&
      iterateur2.next().value === undefined
    ) {
      for (let i = 0; i < props.ligne; i++) {
        /** 
         * push an empty array to matrice  i times
         */
        matrice1 = [...matrice1, []];
        for (let j = 0; j < props.colonne; j++) {
          /**
           * 
           * equals to matrice[i].push(1);
           */
          matrice1 = matrice1.map((item, index) =>
            index === i ? [...item, 1] : item
          );
        }
      }
      for (let i = 0; i < props.colonne; i++) {
        /**
         * equals to matrice2.push([]);
         */
        matrice2 = [...matrice2, []];
        for (let j = 0; j < props.colonne2; j++) {
          /**
           * 
           * equals to  matrice2[i].push(1)
           */
          matrice2 = matrice2.map((item, index) =>
            index === i ? [...item, 1] : item
          );
        }
      }
    }
  }

  init();
  /**
   * 
   * @param {*} matrice 
   * this function change matrice1 with the matrice1 who were changed by user and 
   * matrice2 will not changed
   */
  function changeMatrice1(matrice) {
    setMatrice1(matrice);
    setMatrice2(matrice2);
  }

    /**
   * 
   * @param {*} matrice 
   * this function change matrice2 with the matrice2 who were changed by user and 
   * matrice1 will not changed
   */
  function changeMatrice2(matrice) {
    setMatrice1(matrice1);
    setMatrice2(matrice);
  }
  return (
    <div className="parent">
    <BoutonRetour setInit={props.setInit}/>
    <Navigation setNavVal={setNavVal} navVal={navVal}/>
    <div className="row">
     
      {console.log(navVal)/** it calls the three matrix */}
      {navVal==="matrice1" ?(<Matrice
        ligne={props.ligne}
        colonne={props.colonne}
        matrice={matrice1}
        setMatrice={changeMatrice1}
      />):(<>
        
       {/*  */}
      </>)}
      {navVal==="matrice2"?(<Matrice
        ligne={props.colonne}
        colonne={props.colonne2}
        matrice={matrice2}
        setMatrice={changeMatrice2}
      />):(<></>)}
      {navVal==="resultat" ? ( <MatriceRes
        ligne={props.ligne}
        colonne={props.colonne}
        matrice1={matrice1}
        matrice2={matrice2}
        colonne2={props.colonne2}
      />):(<></>)}
     
      
      
    </div>
    </div>
  );
}
