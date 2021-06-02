import React from 'react'

import produtos from '../data/produtos'
export default props => {

    //Função que transforma itens da lista /data/Produtos.js em jsx
    function getProdutosItemLista () {
        return produtos.map(prod => {
            return <li key={prod.id}>
                        {prod.id} - {prod.nome} -&gt; R$ {prod.preco}
                    </li>
        })
    }
    
    
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosItemLista()}
            </ul>
            {/* <p>{produtos}</p> */}
        </div>
    )
}