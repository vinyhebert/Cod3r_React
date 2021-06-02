import React from 'react'
import './App.css'


import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFIlhos'
import Card from './layout/Card'
import Primeiro from './components/Primeiro'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#06 - CondicionalComIf">
            <CondicionalComIf numero = {15}></CondicionalComIf> {/* Quando o param é numero usamos {} quando string usamos aspas  */}
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero = {12}></Condicional> {/* Quando o param é numero usamos {} quando string usamos aspas  */}
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componentes com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Clara</li>
                    <li>Lia</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com parametro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
        </Card>


        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>


    </div>