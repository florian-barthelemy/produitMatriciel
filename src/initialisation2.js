import React,{useState} from 'react';
import HeaderMatrice from './matrice/headerMatrice';
import BodyMatrice from './matrice/bodyMatrice';
export default function Initialisation2(props){
    let [matrice1]= useState([]);
    let [matrice2]= useState([]);
     
    for ( let i=0;i<props.ligne;i++){
        matrice1[i]=[];
        for (let j=0;j<props.colonne;j++){
            matrice2[j]=[];
            matrice1[i].push(1);
            for (let k=0;k<props.colonne2;k++){
                matrice2[j].push(0);
            }
        }
    }
    

return(<div className="row">
<div className="col mx-2 table-responsive ">
    <table className="table">
        <thead><HeaderMatrice matrice={matrice1}/></thead>
    <tbody>
        <BodyMatrice matrice={matrice1}/>
    </tbody>
  </table>
  </div>
  <div className="col mx-2 table-responsive">
  <table className="table">
       <thead>
        <HeaderMatrice matrice={matrice2}/>
       </thead>
       <tbody>
        <BodyMatrice matrice={matrice2}/>
       </tbody>
   </table>
   </div>
    </div>
    )
}