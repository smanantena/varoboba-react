import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import CardItemFilActu from '../../components/cards/CardItemFilActu/CardItemFilActu'
import './Home.css'
import axios from 'axios'

function Home  ({ products, cart, setCart, setProducts })  {
    

    return (
        <main>
            <Header cart={cart} />
            <section>
                <div className="container">
                    <h2>Publications de ventes</h2>
                    <div className="cards-container">
                        {
                            products.map(
                                product => <CardItemFilActu key={product.id} product={product} setCart={setCart} setProducts={setProducts} />
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home