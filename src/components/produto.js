import React from 'react';

import style from './style.css';

const Produto = ({produto, produtos}) => {

    const {nome, image, preco, id} = produto;


    const addProduto = id => {
        const produto = produtos.filter((produto) => produto.id === id);
        console.log(produto)
        alert('Seu Post-it foi reservado com sucesso!!!')
    }
    return (
           
        <ul className="container__content__produtos">
            <img src={image} alt="img" />
                    <li>{nome}</li>
                    <li>${preco}</li>
                    <button type="button" onClick={() => addProduto(id)}>Reservar</button>
                </ul>
            

            
               
    );
};

export default Produto;