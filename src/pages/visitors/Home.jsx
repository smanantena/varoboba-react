import React from 'react'
import Header from '../../components/common/Header'
import CardItemFilActu from '../../components/cards/CardItemFilActu/CardItemFilActu'


const Home = () => {
    return (
        <main>
            <Header />
            <section>
                <div className="container">
                    <h2>Publications de ventes</h2>
                    <div className="row">
                        <CardItemFilActu/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home