import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';

// index.css'
import '../styles/index.css'

// components
import Card from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='d-flex justify-content-center'>
      <Card number={<i class="bi bi-stopwatch"></i>}
        textSize={"100px"} />
      <Card number={0} textSize={"180px"} />
      <Card number={0} textSize={"180px"} />
      <Card number={0} textSize={"180px"} />
      <Card number={0} textSize={"180px"} />
      <Card number={0} textSize={"180px"} />
      <Card number={0} textSize={"180px"} />
    </div>
  </React.StrictMode>,
)
