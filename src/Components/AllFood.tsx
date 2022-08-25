import {Product} from "../App/Interfaces/RestaurantInterface";
import React from 'react';
import ReactDOM from 'react-dom'
import Card from "./Card";

const AllFood = ({products}:{products:Product[]}) => {

    const renderProducts = ()=>{
        return products.map((product:Product)=>{
            return (<div className="col-md-3"> <Card product={product}/></div>)
        })
    }


    return (<div className="row">
        {renderProducts()}
    </div>)

}

export default AllFood