import React from "react";
import CelluleMatrice from "./celluleMatrice";
export default function BodyMatrice(props) {
  /**
   * 
   * @param {*} e 
   * function called by the changement of one cellule
   */
  function onChangeCellule(e) {
    let indice = e.target.id.split(":");
    props.setCellule(indice, e.target.value);
  }
/**
 * function to display the body of the matrix
 */
  function body() {
    return (
      /**for every row we add  a new line on the tab who contains the number pf the current row */
      props.matrice &&
      props.matrice.map((ligne, index) => {
        return (
          <tr key={"ligneIndex" + index}>
            <th className="input" scope="col">
              {index}
            </th>
             
            {/**for every items(cellule) of each row  we display  a cellule */
            ligne.map((cellule, index2) => {
              return (
                <td className="input" key={"celluleIndex" + index + index2}>
                  <CelluleMatrice
                    onChange={onChangeCellule}
                    index={index}
                    index2={index2}
                    defaultValue={cellule}
                  />
                </td>
              );
            })}
          </tr>
        );
      })
    );
  }

  return <>{body()}</>;
}
