import './index.css'
import React from 'react' //Biblioteca React é uma dependencia para JSX
import ReactDom from 'react-dom'


import App from './App.jsx'

ReactDom.render(
   <App></App>,
    document.getElementById('root')
)