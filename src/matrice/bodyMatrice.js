import React from "react";
import CelluleMatrice from './celluleMatrice';
export default function BodyMatrice(props) {
 function onChangeCellule(e){
   let indice= e.target.id.split(":");
   props.setCellule(indice,e.target.value);
  };
  
  function body() {
    return props.matrice && props.matrice.map((ligne, index) => {
      return (
        <tr key={"ligneIndex" + index}>
          <th className="input" scope="col">{index}</th>
          {ligne.map((cellule, index2) => {
            return (
              <td className="input" key={"celluleIndex" + index + index2}>
                  <CelluleMatrice onChange={onChangeCellule} index={index} index2={index2} defaultValue={cellule}/>
              </td>
            );
          })}
        </tr>
      );
    });
  }

  return <>{body()}</>;
}
