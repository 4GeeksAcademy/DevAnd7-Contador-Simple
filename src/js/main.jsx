import React from 'react'
import ReactDOM from 'react-dom/client'


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';


import '../styles/index.css'


import Card from './components/Card';
import Cardreloj from './components/Cardreloj';

let numero = 0;

setInterval(() => {

  const digitos = numero.toString().padStart(6, "0").split("");

  ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <div className='d-flex justify-content-center'>
       
        <Cardreloj />

        
        {digitos.map((d, i) => (
          <Card key={i} num={d} />
        ))}
      </div>
    </>
  );

  numero++;
}, 1000);