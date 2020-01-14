import React, { useState } from "react";

export default function CelluleMatrice(props) {
    /** init erreur value to false */
  let [erreurValue, setErreurValue] = useState(false);
  /** when we change the value of an input  this function will be called */
  const onChange = e => {
    let value = parseFloat(e.target.value);
    /**if the value is a number so we can change the value else it show a error message */
    if (isNaN(value)) {
      setErreurValue(true);
    } else {
      setErreurValue(false);
      props.onChange(e);
    }
  };
  return (
    <>
      <input
        onChange={onChange}
        /** it will take the value of the matrix to default value */
        defaultValue={props.defaultValue}
        /** id contains the two index of the cellule */
        id={props.index + ":" + props.index2}
        type="number"
        className=" text-center form-control"
      />
      {/** if erreurValue===true so it shows the error else it shows nothing more*/
      erreurValue ? (
        <small className="text-danger">
          La valeur rentrée n'est pas un nombre
        </small>
      ) : (
        <></>
      )}
    </>
  );
}
