import React from 'react'
import Header from '../../components/common/Header'
import CardItemFilActu from '../../components/cards/CardItemFilActu/CardItemFilActu'
import './Home.css'
import Carousel from '../../components/Section/Carousel'

const Home = () => {
    return (
        <main>
            <Header />
            <section>
                <div className="container">
                    <h2>Publications de ventes</h2>
                    <div className="cards-container">
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                        <CardItemFilActu/>
                      
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home