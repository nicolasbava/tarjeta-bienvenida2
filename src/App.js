import React, { useCallback, useState, useEffect } from "react";
import Card from "./components/Card";

import Form from './components/Form'

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

function App() {



  const handleCaptureClick = useCallback(async () => {

    const canvas = await html2canvas(null);
    const dataURL = canvas.toDataURL('image/png');

    downloadjs(dataURL, 'card.png', 'image/png');

  }, []);


  return (
    <div>


      CREAR TARJETA DE BIENVENIDA
      <Form />
      <Card />

      

      <button href="#" onClick={handleCaptureClick}>
        Descargar
      </button>

    </div>
  );
}

export default App;


// definir un estado global
// modificar ese estado global
// escribir ese estado global
// captura de pantalla
// test
