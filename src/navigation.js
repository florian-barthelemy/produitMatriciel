import React from 'react';

export default function(props){
    function changeVal(e){
        props.setNavVal(e.target.value);
    }
    return(
       <ul className="nav justify-content-center mb-4">
           <li className="mx-2">
               <button  value="matrice1" className={props.navVal==="matrice1"? "active" : "notActive"} onClick={changeVal}>Matrice1</button>
           </li>
           <li className="mx-2">
               <button value="matrice2"  className={props.navVal==="matrice2"? "active" : "notActive"} onClick={changeVal}>Matrice2</button>
           </li>
           <li className="mx-2">
               <button value='resultat'  className={props.navVal==="resultat"? "active" : "notActive"} onClick={changeVal}>Resultat</button>
           </li>
       </ul>
    )
}