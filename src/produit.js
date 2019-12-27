import React, { useState } from "react";
import Init2 from "./initialisation2";
export default function Produit() {
  let [init, setInit] = useState(false);
  let [init2, setInit2] = useState(false);
  let colonne = 0;
  let colonne2 = 0;
  let [colonneProps, setColonneProps] = useState(1);
  let [colonne2Props, setColonne2Props] = useState(1);
  let [ligneProps, setLigneProps] = useState(1);
  let ligne = 0;
  let [msgErreurLigne, setMsgErreurLigne] = useState("");
  let [msgErreurColonne, setMsgErreurColonne] = useState("");
  let [msgErreurColonne2, setMsgErreurColonne2] = useState("");
  let [erreurLigne, setErreurLigne] = useState(false);
  let [erreurColonne, setErreurColonne] = useState(false);
  let [erreurColonne2, setErreurColonne2] = useState(false);
  const onChangeColonne = e => {
    colonne = e.target.value;
    setColonneProps(colonne);
    if (isNaN(colonne) || (colonne%1)!==0) {
      setErreurColonne(true);
      setMsgErreurColonne("le nombre de colonnes doit être un entier");
      
    } else {
      if (colonne<1) {
       setErreurColonne(true);
      setMsgErreurColonne(
        "le nombre de colonnes doit être supérieur ou égale à 1");
      } else {
        setErreurColonne(false);
      }
    }
  };

  const onChangeColonne2 = e => {
    colonne2 = e.target.value;
    setColonne2Props(colonne2);
    if (colonne2 < 1) {
      setErreurColonne2(true);
      setMsgErreurColonne2(
        "le nombre de colonnes doit être supérieur ou égal à 1"
      );
    } else {
      if (isNaN(colonne2 )|| (colonne2%1)!==0) {
        setErreurColonne2(true);
        setMsgErreurColonne2("le nombre de colonnes doit être un entier");
      } else {
        setErreurColonne2(false);
      }
    }
  };

  const onChangeLigne = e => {
    ligne = e.target.value;
    setLigneProps(ligne);
    if (ligne < 1) {
      setErreurLigne(true);
      setMsgErreurLigne("le nombre de lignes doit être  égal ou supérieur à 1");
    } else {
      if (isNaN(ligne) || (ligne%1)!==0) {
        setErreurLigne(true);
        setMsgErreurLigne("le nombre de lignes doit être un entier");
      } else {
        setErreurLigne(false);
      }
    }
  };

  function valider(e) {
    e.preventDefault();
    if (!erreurColonne && !erreurLigne &&!erreurColonne2) {
      setInit2(true);
      setInit(true);
    } else {
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
              <label htmlFor="ligne">Nombre de lignes</label>
              <input
                type="number"
                min="1"
                className="form-control"
                id="ligne"
                onChange={onChangeLigne}
                defaultValue="1"
              />
              {erreurLigne ? <small>{msgErreurLigne}</small> : <> </>}
            </div>
            <div className="form-group">
              <label htmlFor="colonne">Nombre de colonnes</label>
              <input
                type="number"
                min="1"
                className="form-control"
                id="colonne"
                onChange={onChangeColonne}
                defaultValue='1'
              />
              {erreurColonne ? <small>{msgErreurColonne}</small> : <> </>}
            </div>

            <p>
              Veuillez entrer le nombre de colonnes pour la deuxieme matrice
            </p>
            <div className="form-group">
              <label htmlFor="colonne2">
                Nombre de colonnes pour la deuxieme matrice
              </label>
              <input
                type="number"
                min="1"
                className="form-control"
                id="colonne2"
                onChange={onChangeColonne2}
                defaultValue="1"
              />
              {erreurColonne2 ? <small>{msgErreurColonne2}</small> : <> </>}
            </div>
            <button type="submit" onClick={valider} className="btn btn-primary">
              Valider
            </button>
          </form>
        </div>
      ) : init2 ? (
        <Init2
          colonne={colonneProps}
          ligne={ligneProps}
          colonne2={colonne2Props}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
