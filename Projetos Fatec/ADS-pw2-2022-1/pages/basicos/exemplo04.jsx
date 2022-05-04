import React from "react";

export default function init(){
    return (
        //Forma de de inserir códigos html no jsx

        //Dessa forma fica uma div dentro de outra div
        /*<div>
            <h1>Pagina de cadastro</h1>
            <h2>Subpagina</h2>
        </div>
        */
        
        //Dessa forma fica somente a div principal
        /* <React.Fragment>
            <h1>Pagina de cadastro</h1>
            <h2>Subpagina</h2>
        </React.Fragment>
        */

        //Dessa forma fica somente a div principal, segue o mesmo conceito do caso acima, com os comandos <> o jsx sabe que é um código fragment
        <>
            <h1>Pagina de cadastro</h1>
            <h2>Subpagina</h2>
        </>
    )
}