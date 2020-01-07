import React,{useState} from 'react';

export default function CelluleMatrice(props){
    let [erreurValue,setErreurValue]= useState(false);
    const onChange=e=>{
           let value=parseFloat(e.target.value);
           if(isNaN(value)){
            setErreurValue(true);
           }else{
               setErreurValue(false);
               props.onChange(e)
           }
    }
    return(
        <>
        <input onChange={onChange}  defaultValue={props.defaultValue} id={props.index+":"+props.index2} type="number" className=" text-center form-control"/>
        {erreurValue ?(<small className="text-danger">La valeur rentrée n'est pas un nombre </small>):(<></>)}
        </>
    )
}