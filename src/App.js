import React from "react";
import biscoito  from './assets/biscoito.png'
import Botao from "./Botao";

function App() {
  

 
  
  return (
    <div className="container">
      <img src={biscoito} alt="imagem de um biscoito" className="image"/>
      <Botao/>  
     
    </div>
  );
}

export default App;
