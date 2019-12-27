import React from 'react';

export default function HeaderMatrice1(props){

   function header(){
    return (props.matrice && props.matrice[0].map((value,index)=>{
        return(<th scope="col" key={"index"+index+"HeaderMatrice1"}>{index}</th>)
    }))
   }
    return(
        <tr><th>index</th>{header()}</tr>
    )
}