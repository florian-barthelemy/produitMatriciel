import React,{useState} from 'react';

export default function Initialisation2(props){
    let [matrice1]= useState([])
    
    for ( let i=0;i<props.ligne;i++){
        matrice1[i]=[];
        for (let j=0;j<props.colonne;j++){
           
            matrice1[i].push(1);
        }
    }
    console.log(matrice1)
    function displayMatrice1(){
     return(matrice1.map((ligne,index)=>{
         return (<div key={"ligne"+index} className="row mx-2">
             {ligne.map((cellule,index2)=>{
                 return(<div  key={"cellule"+index+index2}className="col mx-1">
                     {cellule}
                 </div>)
             })}
         </div>)
     }))
      }

      

   

return(<div>{displayMatrice1()}</div>)
}