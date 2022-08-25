import React from 'react';
import ReactDOM from 'react-dom';
import {Product} from "../App/Interfaces/RestaurantInterface";

const Card = ({product}:{product:Product}) => {

    const renderImage = () =>{
        if (product.images.length > 0) {
            return <img className="bd-placeholder-img card-img-top" style={{objectFit:"contain"}} width="100%" height="225" src={product.images[0].image_url} alt=""/>
        } return <h6>Obrázek není k dispozici</h6>
    }


    return (<div style={{minHeight:"450px"}}  className="card shadow-sm mb-3">
        {renderImage()}
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description.substring(0,100)}</p>
        </div>
        <div className="card-footer test-muted">{product.product_variations[0].price} Kč</div>
    </div>);
}


export default Card;