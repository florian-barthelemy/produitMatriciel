import React, { useState} from "react";
import Init2 from './initialisation2';
export default function Produit() {
  let [init, setInit] = useState(false);
  let [init2, setInit2] = useState(false);
  let colonne=0;
  let [colonneProps,setColonneProps]=useState(0);
  let [ligneProps,setLigneProps]=useState(0);
  let ligne=0;
  let [erreurLigne,setErreurLigne]=useState(true);
  let [erreurColonne,setErreurColonne]= useState(true);

  const onChangeColonne= (e)=>{
   colonne=e.target.value
   setColonneProps(colonne)
    if (colonne<1){
    setErreurColonne(true)
    }
    else{
      setErreurColonne(false);
      
    }
  }

  const onChangeLigne=(e)=>{
    ligne=e.target.value
    setLigneProps(ligne);
    if(ligne<1){
      setErreurLigne(true)
    }else{
      setErreurLigne(false)
    }
  }


  function valider(e) {
    e.preventDefault();
    if(!erreurColonne && !erreurLigne){
    
    setInit2(true);
    setInit(true);
    }
    else{
      alert("nombre de colonnes et/ou lignes invalide");
    }
  }


  return (
    <div>
      {!init ? (
        <div className="container">
          <p>
            Veuillez entrer le nombre de colonnes et lignes pour la première
            matrice
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="colonne">Nombre de colonnes</label>
              <input type="number"  min="1" className="form-control" id="colonne" onChange={onChangeColonne} />
              {erreurColonne ?
              (<small>Le nombre de colonne doit etre supérieur ou égal a 1</small>):(<> </>)}
            </div>
            <div className="form-group">
              <label htmlFor="ligne">Nombre de lignes</label>
              <input type="number" min="1" className="form-control" id="ligne" onChange={onChangeLigne} />
              {erreurLigne ?
              (<small>Le nombre de ligne doit etre supérieur ou égal a 1</small>):(<> </>)}
            </div>
            <button
              type="submit"
              onClick={valider}
              className="btn btn-primary"
            >
              Valider
            </button>
          </form>
        </div>
      ) : (init2 ?(
        <Init2 colonne={colonneProps} ligne={ligneProps}/>
      ):(
        <></>
      )
      )}
    </div>
  );
}
