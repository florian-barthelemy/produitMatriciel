import React from 'react';

export default function CelluleMatrice(props){
    return(
        <>
        {console.log(props.defaultValue)}
        <input value={props.defaultValue} disabled={true} id={props.index+":"+props.index2} type="number" className=" text-center form-control"/>
        </>
    )
}