import React from 'react';

export default function CelluleMatrice(props){
    return(
        <>
        {console.log(props.defaultValue)}
        <input /*value to make the value of the input of the case of matrix*/value={props.defaultValue} /* disabled to makes changesby user disabled*/disabled={true}  type="number" className=" text-center form-control"/>
        </>
    )
}