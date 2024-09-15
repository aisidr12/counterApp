import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './FirstApp';
import { SecondApp } from './SecondApp';
import { CounterApp } from './CounterApp';
import './styles.css';

//Cuando se tiene la llave {App} es una 
//forma de exportar la funcion de manera mas granulada
//mas especifica

//Hay otra forma de exportar tambien poniendo en la
//funcion export default y en ese caso
// el import seria sin las llaves


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {0} />
    </React.StrictMode>
    //Si quisiera enviar props como numeros
    //tengo que enviar con llaves
);