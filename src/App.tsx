import React, {useEffect} from 'react';
import './App.css';
import Card from "./Components/Card";
import Controller from "./App/Controller";
import {IRestaurant, Product} from "./App/Interfaces/RestaurantInterface";
import allFood from "./Components/AllFood";
import AllFood from "./Components/AllFood";
import Opening from "./Components/Opening";

function App() {
    const controller = new Controller();
    const [randomFood, setRandomFood] = React.useState<Product | null>(null
    );
    const [restaurantUrl, setRestaurantUrl] = React.useState<string>("");

    const [allFood, setAllFood] = React.useState<Product[]>([]);


    useEffect(() => {
        loadRestaurant();
    }, [restaurantUrl])


    const loadRestaurant = async () => {
        if(restaurantUrl === "")
            return;
        console.log("Loading restaurant: " + restaurantUrl);
        await controller.loadRestaurant(restaurantUrl);
        setAllFood(await controller.getAllFood());
        setRandomFood(await controller.getRandomFood())

    }

    const renderCard = () => {
        if (randomFood) {
            return <Card product={randomFood}/>
        }
    }

    const selectRestaurant = async () => {
        const input = document.querySelector("input#restaurantUrl") as HTMLInputElement;
        console.log(input.value);
        if(input.value === restaurantUrl)
            return;
        setRestaurantUrl(input.value);
    }

    const getRandomFood = async () => {
        setRandomFood(await controller.getRandomFood());
    }


    return (
        <div className="App">
            <div className="container">
                <div className="col-md-4 m-auto">{renderCard()}</div>
                <div className="col-md-8 m-auto mb-5">
                    <button className="btn btn-primary btn-lg btn-block mt-5 mb-5" disabled={allFood.length < 1} onClick={getRandomFood}>Random Food</button>
                    <div className="input-group mb-3">
                        <input type="text" id="restaurantUrl" defaultValue={restaurantUrl} className="form-control" placeholder="Please enter restaurant Url"/>
                        <button className="btn btn-outline-secondary" onClick={selectRestaurant}>Select restaurant</button>
                    </div>

                </div>
                <Opening products={allFood}/>
                {/*<AllFood products={allFood}/>*/}
            </div>
        </div>
    );
}

export default App;
