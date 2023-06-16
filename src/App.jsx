import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPropTypes  from 'react';


function SimpleCounter(props) {
  console.log(props)
  return (
    <div className='caja d-flex justify-content-center'>
      <div className='reloj'><i className="fa-solid fa-clock"></i></div>
      <div className='numero5 rounded border border-success'>{props.cinco % 10}</div>
      <div className='numero4 rounded border border-success'>{props.cuatro % 10}</div>
      <div className='numeor3 rounded border border-success'>{props.tres % 10}</div>
      <div className='numero2 rounded border border-success'>{props.dos % 10}</div>
      <div className='numero1 rounded border border-success'>{props.uno % 10}</div>
      <div className='numero rounded border border-success'>{props.cero % 10}</div>
    </div>
  );
}
export default SimpleCounter;
SimpleCounter.ReactpropTypes = {
  numero5: ReactPropTypes.number,
  numero4: ReactPropTypes.number,
  numero3: ReactPropTypes.number,
  numero2: ReactPropTypes.number,
  numero1: ReactPropTypes.number,
  numero: ReactPropTypes.number,
  
}

  

  


    
let counter = 1 ;


  
setInterval(() => {
  let cinco = Math.floor(counter/1000000)
  let cuatro = Math.floor(counter/10000)
  let tres = Math.floor(counter/1000)
  let dos = Math.floor(counter/100)
  let uno = Math.floor(counter/10)
  let cero = Math.floor(counter/1)
  console.log(cero, uno, dos, tres, cuatro, cinco)
  counter++
  ReactDOM.render(
    <SimpleCounter cinco={cinco} cuatro = {cuatro} tres = {tres} dos ={dos} uno ={uno} cero={cero}/>,
    document.querySelector("#root")
    );
  }, 1000)