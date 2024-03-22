
import { useEffect, useState } from 'react'
import './CardItemFilActu.css'
import axios from 'axios'

const CardItemFilActu = ({ product }) => {
    const [user, setUser] = useState([])

    const fetchData = async () => {
        try {
            console.log
            const result = await axios("http://localhost:8000/api/users/" + product['id_client']);
            if (Object.entries(user).length === 0) {
                setUser(result.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (

        <div className="card-item-mini">
            <div className="card-item-owner-container">
                <img loading="lazy" src={'http://localhost:8000/storage/img/photos/profiles/' + user['image']} alt="" />
                <p>{user['name']}</p>
            </div>
            <div className="card-item-mini-image" data-mdb-ripple-init data-mdb-ripple-color="light">
                {
                    (product['image_produit'].includes('.jpg')) ?
                    <img loading="lazy" src={'http://localhost:8000/storage/img/photos/produits/' + product['image_produit']} className="img-fluid" />
                    :
                    <img src={'https://placehold.co/600x400/png'} className="img-fluid" />
                }
            </div>
            <div className="card-item-mini-body">
                <p className="card-item-price">{product['prix_produit']} ar</p>
            </div>
        </div>
    )
}

export default CardItemFilActu