import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';

// index.css
import '../styles/index.css'

// components
import Card from './components/Card';
import Cardreloj from './components/Cardreloj';

let numero = 0;

setInterval(() => {
  // Convertimos el número en string, lo rellenamos con ceros hasta 6 dígitos
  const digitos = numero.toString().padStart(6, "0").split("");

  ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <div className='d-flex justify-content-center'>
        {/* Caja para el reloj */}
        <Cardreloj />

        {/* 6 cajas para los dígitos */}
        {digitos.map((d, i) => (
          <Card key={i} num={d} />
        ))}
      </div>
    </>
  );

  numero++;
}, 1000);