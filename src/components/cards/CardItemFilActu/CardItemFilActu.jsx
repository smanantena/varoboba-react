import React from 'react'
import './CardItemFilActu.css'

const CardItemFilActu = () => {
    return (
        <div className="card-item-mini">
            <div className="card-item-mini-image" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" />
            </div>
            <div className="card-item-mini-body">
                <p className="card-item-price">Card title</p>
            </div>
        </div>
    )
}

export default CardItemFilActu