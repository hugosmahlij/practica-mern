import "./App.css";
import data from "./data/events1";
import CardText from "./components/CardText";
import BotonCambio from "./components/BotonCambio";
import { useState } from "react";
import React from "react";

function App() {
  let [numeroACambiar, setNumeroACambiar] = useState(0);
  let [mostrarOcultar, setMostrarOcultar] = useState(true);

  let derecha = () => {
    if (numeroACambiar < data.length - 1) {
      setNumeroACambiar(++numeroACambiar);
    } else {
      setNumeroACambiar(0);
    }
  };

  let izquierda = () => {
    if (numeroACambiar > 0) {
      setNumeroACambiar(--numeroACambiar);
    } else {
      setNumeroACambiar(data.length - 1);
    }
  };

  let up = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <div className="card">
      <h4 className="card_category">{data[numeroACambiar].category}</h4>
      <figure className="card_img">
        <img src={data[numeroACambiar].image} alt="xd" />
      </figure>
      {mostrarOcultar ? (
        <>
          <CardText
            nombre={data[numeroACambiar].name}
            descripcion={data[numeroACambiar].description}
          />
          <div className="btn">
            <BotonCambio nombre="LEFT" estilo="btn_L" accion={izquierda} />
            <BotonCambio nombre="UP" estilo="btn_L" accion={up} />
            <BotonCambio nombre="RIGHT" estilo="btn_L" accion={derecha} />
          </div>
        </>
      ) : (
        <BotonCambio nombre="DOWN" estilo="btn_L" accion={up} />
      )}
    </div>
  );
}
export default App;
