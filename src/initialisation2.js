import React,{useState} from 'react';
import Matrice from './matrice/matrice';
export default function Initialisation2(props){
    let [matrice1,setMatrice1]= useState([]);
    let [matrice2,setMatrice2]= useState([]);
    let [matrice3,setMatrice3]= useState([]);
    function changeMatrice1(matrice){
        setMatrice1(matrice);
        console.log(matrice1);
    }
    function changeMatrice2(matrice){
        setMatrice2(matrice)
        console.log(matrice1)
    }

    function calculer(){
   
        matrice3=[];
        for (let i=0;i<props.ligne;i++){
            matrice3[i]=[]
            for (let k=0;k<props.colonne2;k++){
               matrice3[i].push(0)
                for (let j=0;j<props.colonne;j++){
                   matrice3[i][k]+=matrice1[i][j]*matrice2[j][k];
                }
            }
        }
        console.log(matrice3,matrice1,matrice2)
return matrice3
    }
 
return(<div className="row">
        <Matrice ligne={props.ligne} colonne={props.colonne} setMatrice={changeMatrice1} calculer={calculer}/>
        <Matrice ligne={props.colonne} colonne={props.colonne2} setMatrice={changeMatrice2} calculer={calculer}/>
{/**/}
{/*    <div className="col mx-2 table-responsive">
  <table className="table">
       <thead>
         <HeaderMatrice matrice={matrice2} />
      </thead>
       <tbody>
       <BodyMatrice disabled={false} matrice={matrice2} calculer={calculer}/> 
      </tbody>
   </table>
   </div> */}
   {/* <div className="col mx-2 table-responsive">
  <table className="table">
       {<thead>
        <HeaderMatrice matrice={matrice3}/>
       </thead> }
       <tbody>
        <BodyMatrice disabled={true} matrice={matrice3}/>
       </tbody>
   </table>
   </div> */}
    </div>
    )
}