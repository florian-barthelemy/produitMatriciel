import React,{useState} from 'react';
import HeaderMatrice from './matrice/headerMatrice';
import BodyMatrice from './matrice/bodyMatrice';
export default function Initialisation2(props){
    let [matrice1]= useState([]);
    let [matrice2]= useState([]);
    let [loading,setLoading]= useState(0)
    for ( let i=0;i<props.ligne;i++){
        matrice1[i]=[];
        for (let j=0;j<props.colonne;j++){
            matrice2[j]=[];
            matrice1[i].push(1);
            for (let k=0;k<props.colonne2;k++){
                matrice2[j].push(1);
            }
        }
    }
    

    function calculer(){

        let res=[];
        for (let i=0;i<props.ligne;i++){
            res[i]=[]
            for (let k=0;k<props.colonne2;k++){
                res[i].push(0)
                for (let j=0;j<props.colonne;j++){
                    res[i][k]+=matrice1[i][j]*matrice2[j][k];
                }
            }
        }
return res
    }

return(<div className="row">
  
<div className="col mx-2 table-responsive ">
    <table className="table">
        <thead><HeaderMatrice matrice={matrice1}/></thead>
    <tbody>
        <BodyMatrice disabled={false} matrice={matrice1} calculer={calculer}/>
    </tbody>
  </table>
  </div>
  <div className="col mx-2 table-responsive">
  <table className="table">
       <thead>
        <HeaderMatrice matrice={matrice2} />
       </thead>
       <tbody>
        <BodyMatrice disabled={false} matrice={matrice2} calculer={calculer}/>
       </tbody>
   </table>
   </div>
   <div className="col mx-2 table-responsive">
  <table className="table">
       <thead>
        <HeaderMatrice matrice={calculer()}/>
       </thead>
       <tbody>
        <BodyMatrice disabled={true} matrice={calculer()}/>
       </tbody>
   </table>
   </div>
    </div>
    )
}