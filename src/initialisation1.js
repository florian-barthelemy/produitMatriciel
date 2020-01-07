import React, { useState } from "react";
import Init2 from "./initialisation2";
import * as Yup from "yup";
import { Formik } from "formik";
export default function Produit() {
  let [init, setInit] = useState(false);
  let [colonne,setColonne]=useState(1);
  let [colonne2,setColonne2]=useState(1);
  let [ligne,setLigne]=useState(1);
  let [defaultValue] = useState({ colonne: 1, ligne: 1, colonne2: 1 });

  let formSchema = Yup.object().shape({
    colonne: Yup.number()
    .typeError("ce nombre doit être un nombre")
    .required("le nombre de colonne de la première matrice requis")
      .integer("ce nombre doit être entier")
      .min(1, "le nombre de colonnes  doit être supérieur à 1")
      ,
    ligne: Yup.number()
      .required("le nombre de ligne de la première matrice requis")
      .min(1, "le nombre de lignes doit être supérieur a 1")
      .integer("ce nombre doit être entier"),
    colonne2: Yup.number()
      .required("le nombre de colonne de la deuxième matrice requis")
      .integer("ce nombre doit être entier")
      .min(1, "le nombre de colonnes  doit être supérieur à 1")
  });

  function valider(e) {
   setColonne(e.colonne);
   setColonne2(e.colonne2);
   setLigne(e.ligne);
    setInit(true);
  }

  return (
    <div>
      {!init ? (
        <div className="container">
          {
            <Formik
              onSubmit={valider}
              initialValues={defaultValue}
              validationSchema={formSchema}
            >
              {({ values, handleChange, handleSubmit, handleBlur, errors }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="ligne">
                      Nombre de lignes de la première matrice
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      id="ligne"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ligne}
                    />
                    {errors.ligne && (
                      <small  className="form-text  text-danger d-flex float-right">
                        {errors.ligne}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="colonne">
                      Nombre de colonnes de la première matrice
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      id="colonne"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.colonne}
                    />
                    {errors.colonne && (
                      <small className="form-text text-danger d-flex float-right">
                        {errors.colonne}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="colonne2">
                      Nombre de colonnes de la deuxième matrice
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="form-control"
                      id="colonne2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.colonne2}
                    />
                    {errors.colonne2 && (
                      <small className="form-text text-danger d-flex float-right">
                        {errors.colonne2}
                      </small>
                    )}
                  </div>
                      <button type="submit">valider</button>
                </form>
              )}
            </Formik>
          }
        </div>
      ) : (
        <Init2
        colonne={colonne}
        ligne={ligne}
        colonne2={colonne2}
        />
      ) }
    </div>
  );
}
