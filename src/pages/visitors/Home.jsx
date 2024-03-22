import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import CardItemFilActu from '../../components/cards/CardItemFilActu/CardItemFilActu'
import './Home.css'
import axios from 'axios'

const Home = ({ products }) => {
    

    return (
        <main>
            <Header />
            <section>
                <div className="container">
                    <h2>Publications de ventes</h2>
                    <div className="cards-container">
                        {
                            products.map(
                                product => <CardItemFilActu key={product.id} product={product} />
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home