import React, { Fragment, useState } from 'react';
import Produto from './components/produto';

import postit from './imagems/postit.jpg'
import post from './imagems/post.jpg'
import paper from './imagems/paper.jpg'


function App() { 
  const [produtos, setProdutos] = useState([
    { id: 1, image: postit, nome: 'Super Pegajoso', preco: 5 },
    { id: 2,  image: post, nome: 'Colorido', preco: 7 },
    { id: 3, image: paper,nome: 'Reciclado', preco: 3 },
    
  ])

//Estado do carrito
const [reseva, setReserva] = useState([])

  return (
    <Fragment>
      <section className="container">
        <div className="container__header__title"><h2 className="container__header__title--text">POST-IT</h2>
        </div>

        <div className="container__content__listPost-it">
          {produtos.map((produto) => (
            <Produto
            key={produto.id}
            produto={produto}
            reseva={reseva}
            setReserva={setReserva}
            produtos={produtos}
            setProdutos={setProdutos}
            />
          ))}
        </div>
      </section>
    </Fragment>
    
  )
}

export default App;
