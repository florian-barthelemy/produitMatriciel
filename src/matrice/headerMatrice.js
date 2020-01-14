import React from 'react';

export default function HeaderMatrice(props){
/**
 * display the header of the tab
 */
   function header(){
       /** for every elements of the first ligne of every matrix we add a row with the current column number */
    return (props.matrice && props.matrice[0].map((value,index)=>{
        return(<th  scope="col" key={"index"+index+"HeaderMatrice1"}>{index}</th>)
    }))
   }
    return(
        <tr><th>index</th>{header()}</tr>
    )
   }


