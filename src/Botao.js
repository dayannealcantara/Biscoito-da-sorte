import React, { useState } from "react";


function Botao() { 
  const [textoFrase, setTextoFrase] =  useState('')

 

const quebrarBiscoito =()=>{

  const frases= [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]
;   
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    let TextoFrase = '" ' + frases[numeroAleatorio] + ' "'
    setTextoFrase(TextoFrase);
  }
  return (
    <div className="containerBotao" >
     <button className="botao" onClick={quebrarBiscoito}>Abrir biscoito</button> 
     <h3 className="textoFrase">{textoFrase}</h3>  
    </div>
  );
}

export default Botao;
