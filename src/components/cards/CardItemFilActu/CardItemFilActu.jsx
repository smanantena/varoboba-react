import React from 'react'
import './CardItemFilActu.css'

const CardItemFilActu = () => {
    return (
        <div className="card-item-mini">
            <div className="card-item-owner-container">
                <img src="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg" alt="" srcset="" />
                <p>Koto</p>
            </div>
            <div className="card-item-mini-image" data-mdb-ripple-init data-mdb-ripple-color="light">
                <img src="https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg" className="img-fluid" />
            </div>
            <div className="card-item-mini-body">
                <p className="card-item-price">10000 ar</p>
            </div>
        </div>
    )
}

export default CardItemFilActu