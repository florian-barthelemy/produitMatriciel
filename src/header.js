import React from 'react';
export default function Header(){
    return(
    <header>
        <nav className="navbar navbar-expand mb-4">
        <img className="img-fluid" src={process.env.PUBLIC_URL+"/produitmatriciel.png"} alt="logo"/>
        <div className="titre container my-0  justify-content-center">
        <h2 >Produit matriciel</h2>
        </div>
        </nav>
        </header>
    )
}