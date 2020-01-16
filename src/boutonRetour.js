import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
export default function(props){
    function retour(){
        props.setInit(false);
    }
    return(<button  onClick={retour} className="buttonRetour"><FontAwesomeIcon icon={faArrowLeft}/></button>)
}