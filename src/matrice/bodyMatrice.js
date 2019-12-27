import React from "react";
import CelluleMatrice from './celluleMatrice';
export default function BodyMatrice(props) {
  const onChangeCellule = e => {
   let indice= e.target.id.split(":")
   props.matrice[indice[0]][indice[1]]=parseFloat(e.target.value);
   console.log(props.matrice)
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
                {/* <input
                  className=" text-center form-control"
                  onChange={onChangeCellule}
                  type="number"
                  id={index+":"+index2}
                  defaultValue={cellule}
            /> */}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  return <>{body()}</>;
}
